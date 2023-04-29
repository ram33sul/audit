import mongoose from "mongoose";

const reportSchema = new mongoose.Schema({
    typeOfAudit: {type: String, default: ''},
    division: {type: String, default: ''},
    department: {type: String, default: ''},
    area: {type: String, default: ''},
    auditReference: {type: String, default: ''},
    auditor: {type: String, default: ''},
    auditee: {type: String, default: ''},
    auditObjectives: {type: String, default: ''},
    previousTotal: {type: String, default: ''},
    previousClosed: {type: String, default: ''},
    previousPending: {type: String, default: ''},
    previousObservations: {type: String, default: ''},
    presentTotal: {type: String, default: ''},
    presentObservations: {type: String, default: ''},
    auditFindings: {type: String, default: ''},
    postedAt: {type: Date, default: new Date()}
})
const Report = mongoose.model("Report", reportSchema);

const typeOfAuditSchema = new mongoose.Schema({
    name: {type: String, require: true},
    status: {type: Boolean, default: true},
    createdAt: {type: Date, default: new Date()}
})
const TypeOfAuditCollection = mongoose.model("TypeOfAudit", typeOfAuditSchema)

const departmentSchema = new mongoose.Schema({
    name: {type: String, require: true},
    hints: {type: Array, default: []},
    status: {type: Boolean, default: true},
    createdAt: {type: Date, default: new Date()}
})
const Department = mongoose.model("Department", departmentSchema);

export { Report, TypeOfAuditCollection, Department };