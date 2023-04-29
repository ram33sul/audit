import { Report, TypeOfAuditCollection, Department } from "../model/database.js";
import puppeteer from "puppeteer";
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import ejs from 'ejs';
import mongoose from "mongoose";

export const getAuditService = (current) => {
    return new Promise(async (resolve, reject) => {
        try {
            const typeOfAudit = await TypeOfAuditCollection.find().sort({createdAt: 1});
            const departments = await Department.find().sort({createdAt: 1});
            const currentDepartment = await Department.findOne({_id: new mongoose.Types.ObjectId(current)});
            resolve({typeOfAudit, departments, currentDepartment})
        } catch (error){
            console.log(error);
        }
    })
}

export const postReportService = (values) => {
    return new Promise((resolve, reject) => {
        try {
            const postedAt = new Date();
            values.postedAt = postedAt;
            Report.create(values).then((response) => {
                resolve(response.toObject());
            }).catch((error) => {
                console.log(error);
            })
        } catch (error){
            console.log(error);
        }
    })
}

export const htmlToPdfService = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const browser = await puppeteer.launch({headless: "new"});
            const page = await browser.newPage();
            const __dirname = path.dirname(fileURLToPath(import.meta.url));
            const filePath = path.join(__dirname, '../public', '/report/sample.ejs');
            const template = fs.readFileSync(filePath, 'utf-8');
            const html = ejs.render(template, {data});
            await page.setContent(html, { waitUntil: 'domcontentloaded'});
            await page.emulateMediaType('screen');

            const pdf = await page.pdf({
                path: 'result.pdf',
                margin: {
                    top: '0',
                    right: '0',
                    bottom: '0',
                    left: '0'
                },
                printBackground: true,
                format: 'A4',
            }).then(() => {
                resolve(true)
            }).catch(() => {
                reject(false)
            })
            await browser.close()
        } catch (error) {
            reject()
            console.log(error);
        }
    }) 
}

export const gettypeOfAuditsService = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const data = await TypeOfAuditCollection.find().sort({"createdAt": 1});
            resolve(data)
        } catch (error) {
            reject()
            console.log(error);
        }
    })
}

export const addTypeOfAuditService = (name) => {
    return new Promise((resolve, reject) => {
        try {
            TypeOfAuditCollection.create({name}).then((response) => {
                resolve(response)
            }).catch((error) => {
                reject()
                console.log(error);
            })
        } catch (error) {
            reject()
            console.log(error);
        }
    })
}

export const deactivateTypeOfAuditService = (id) => {
    return new Promise((resolve, reject) => {
        try {
            TypeOfAuditCollection.updateOne({
                _id: new mongoose.Types.ObjectId(id)
            },{
                $set: {
                    status: false
                }
            }).then(() => {
                resolve(true)
            }).catch((error) => {
                reject()
                console.log(error);
            })
        } catch (error) {
            reject()
            console.log(error);
        }
    })
}

export const activateTypeOfAuditService = (id) => {
    return new Promise((resolve, reject) => {
        try {
            TypeOfAuditCollection.updateOne({
                _id: new mongoose.Types.ObjectId(id)
            },{
                $set: {
                    status: true
                }
            }).then(() => {
                resolve(true)
            }).catch((error) => {
                reject()
                console.log(error);
            })
        } catch (error) {
            reject()
            console.log(error);
        }
    })
}

export const deleteTypeOfAuditService = (id) => {
    return new Promise((resolve, reject) => {
        try {
            TypeOfAuditCollection.deleteOne({_id: new mongoose.Types.ObjectId(id)}).then(() => {
                resolve(true)
            }).catch((error) => {
                reject()
                console.log(error);
            })
        } catch (error) {
            reject()
            console.log(error);
        }
    })
}



export const getDepartmentService = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const data = await Department.find().sort({"createdAt": 1});
            resolve(data)
        } catch (error) {
            reject()
            console.log(error);
        }
    })
}

export const addDepartmentService = (name) => {
    return new Promise((resolve, reject) => {
        try {
            Department.create({name}).then((response) => {
                resolve(response)
            }).catch((error) => {
                reject()
                console.log(error);
            })
        } catch (error) {
            reject()
            console.log(error);
        }
    })
}

export const deactivateDepartmentService = (id) => {
    return new Promise((resolve, reject) => {
        try {
            Department.updateOne({
                _id: new mongoose.Types.ObjectId(id)
            },{
                $set: {
                    status: false
                }
            }).then(() => {
                resolve(true)
            }).catch((error) => {
                reject()
                console.log(error);
            })
        } catch (error) {
            reject()
            console.log(error);
        }
    })
}

export const activateDepartmentService = (id) => {
    return new Promise((resolve, reject) => {
        try {
            Department.updateOne({
                _id: new mongoose.Types.ObjectId(id)
            },{
                $set: {
                    status: true
                }
            }).then(() => {
                resolve(true)
            }).catch((error) => {
                reject()
                console.log(error);
            })
        } catch (error) {
            reject()
            console.log(error);
        }
    })
}

export const deleteDepartmentService = (id) => {
    return new Promise((resolve, reject) => {
        try {
            Department.deleteOne({_id: new mongoose.Types.ObjectId(id)}).then(() => {
                resolve(true)
            }).catch((error) => {
                reject()
                console.log(error);
            })
        } catch (error) {
            reject()
            console.log(error);
        }
    })
}

export const getDepartmentDetailsService = (id) => {
    return new Promise((resolve, reject) => {
        try {
            Department.findOne({_id: new mongoose.Types.ObjectId(id)}).then((response) => {
                resolve(response)
            }).catch((error) => {
                reject()
                console.log(error);
            })
        } catch (error) {
            reject()
            console.log(error);
        }
    })
}


export const addHintService = (id, hint) => {
    return new Promise((resolve, reject) => {
        try {
            Department.updateOne({
                _id: new mongoose.Types.ObjectId(id)
            },{
                $push: {
                    hints: hint
                }
            }).then(() => {
                resolve(true)
            }).catch((error) => {
                reject()
                console.log(error);
            })
        } catch (error) {
            reject()
            console.log(error);
        }
    })
}

export const deleteHintService = (id, hint) => {
    return new Promise((resolve, reject) => {
        try {
            Department.updateOne({
                _id: new mongoose.Types.ObjectId(id)
            },{
                $pull: {
                    hints: {
                        $eq: hint
                    }
                }
            }).then(() => {
                resolve(true)
            }).catch((error) => {
                reject()
                console.log(error);
            })
        } catch (error) {
            reject()
            console.log(error);
        }
    })
}

export const departmentDropDownSelectService = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const currentDepartment = await Department.findOne({_id: new mongoose.Types.ObjectId(id)});
            resolve(currentDepartment);
        } catch (error) {
            reject()
            console.log(error);
        }
    })
}