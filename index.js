if (process.env.NODE_ENV !== "production") {
    require("dotenv").config();
}

const express = require("express");
const methodOverride = require('method-override');
const app = express();
const path = require("path");
const mongoose = require('mongoose');
const ejsMate = require("ejs-mate");
const morgan = require('morgan');
const Employee = require('./models/employee');
const wrapAsync = require("./utils/wrapAsync")
const ExpressError = require("./utils/expressError");
const employeeSchema = require("./schemas/schemas")

const dbUrl = process.env.DB_URL || 'mongodb://localhost:27017/lumon'
mongoose.connect(dbUrl);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", () => console.log("database connected"))

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(morgan("dev"));

app.engine("ejs", ejsMate)
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

const validate = function (req, res, next) {
    const { error } = employeeSchema.validate(req.body)
    if (error) {
        const msg = error.details.map(el => el.message).join(",")
        throw new ExpressError(msg, 400)
    } next()
}

app.get("/", (req, res) => {
    res.render("home")
});

app.get("/about", (req, res) => {
    res.render("about")
});

app.get("/employees", wrapAsync(async (req, res) => {
    const employees = await Employee.find({})
    res.render("employees/index", { employees })
}));

app.get("/employees/new", (req, res) => {
    res.render("employees/new")
});

app.post("/employees", validate, wrapAsync(async (req, res) => {
    const newEmployee = await Employee.create(req.body.employee);
    console.log(req.body.employee)
    res.redirect(`/employees/${newEmployee._id}`);
}));

app.get('/employees/:id', wrapAsync(async (req, res) => {
    const { id } = req.params;
    const employee = await Employee.findById(id)
    console.log(employee)
    res.render('employees/show', { employee })
}));

app.get('/employees/:id/edit', wrapAsync(async (req, res) => {
    const { id } = req.params;
    const employee = await Employee.findById(id)
    res.render('employees/edit', { employee })
}));

app.patch('/employees/:id',validate, wrapAsync(async (req, res) => {
    const { id } = req.params;
    const { Name, Email, Profession, Gender, Address, Education } = req.body.employee;
    const foundEmployee = await Employee.findOneAndUpdate({ _id: id }, { Name: Name, Email: Email, Profession: Profession, Address: Address, Education: Education, Gender: Gender }, { new: true, runValidators: true })
    res.redirect(`/employees/${foundEmployee._id}`)
}));

app.delete('/employees/:id', wrapAsync(async (req, res) => {
    const { id } = req.params;
    await Employee.findByIdAndDelete(id)
    res.render('success')
}));

app.all("*", (req, res, next) => {
    next(new ExpressError("Page not found", 404))
});

app.use((err, req, res, next) => {
    const { statusCode = 500 } = err;
    if (!err.message) err.message = "Something went wrong";
    res.status(statusCode).render("error", { err });
});

const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`Serving on ${port}`)
})