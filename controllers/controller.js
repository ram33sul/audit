import { activateDepartmentService, activateTypeOfAuditService, addDepartmentService, addHintService, addTypeOfAuditService, deactivateDepartmentService, deactivateTypeOfAuditService, deleteDepartmentService, deleteHintService, deleteTypeOfAuditService, getAuditService, getDepartmentDetailsService, getDepartmentService, gettypeOfAuditsService, htmlToPdfService, postReportService } from "../services/service.js";

export const postReport = (req,res) => {
    try {
        postReportService(req.body).then((response) => {
            return htmlToPdfService(response)
        }).then((response) => {
            res.download('result.pdf',(error) => {
                if(error){
                    console.log(error);
                }
            })
            console.log(response);
        }).catch((error) => {
            res.json({status: false});
        })
    } catch (error) {
        res.json({status: false})
    }
}

export const getAudit = (req,res) => {
    try {
        getAuditService(req.query.current).then((response) => {
            res.render('home.ejs', response);
        }).catch((error) => {
            console.log(error);
        })
    } catch (error) {
        res.json({status: false});
    }
}


export const printReport = (req, res) => {
    try {
        htmlToPdfService().then(() => {
            console.log("success");
        }).catch((error) =>{
            res.json({status: false})
            console.log(error);
        })
    } catch (error) {
        res.json({status: false})
        console.log(error);
    }
}

export const getAdminHome = (req,res) => {
    try {
        res.render('adminHome.ejs');
    } catch (error){
        res.json({status: false})
        console.log(error);
    }
}

export const gettypeOfAudits = (req,res) => {
    try {
        gettypeOfAuditsService().then((data) => {
            res.render('typeOfAudit.ejs', {data})
        }).catch(() => {
            res.json({status: false})
        })
    } catch (error) {
        res.json({status: false})
        console.log(error);
    }
}

export const addTypeOfAudit = (req,res) => {
    try {
        addTypeOfAuditService(req.body.name).then(() => {
            res.redirect('/admin/typeOfAudit')
        }).catch(() => {
            res.json({status: false})
        })
    } catch (error) {
        res.json({status: false})
        console.log(error);
    }
}

export const deleteTypeOfAudit = (req,res) => {
    try {
        deleteTypeOfAuditService(req.query.id).then(() => {
            res.redirect('/admin/typeOfAudit')
        }).catch(() => {
            res.json({status: false})
        })
    } catch (error) {
        res.json({status: false})
        console.log(error);
    }
}

export const deactivateTypeOfAudit = (req, res) => {
    try {
        deactivateTypeOfAuditService(req.query.id).then(() => {
            res.redirect('/admin/typeOfAudit')
        }).catch(() => {
            res.json({status: false})
        })
    } catch (error){
        res.json({status: false})
        console.log(error);
    }
}

export const activateTypeOfAudit = (req, res) => {
    try {
        activateTypeOfAuditService(req.query.id).then(() => {
            res.redirect('/admin/typeOfAudit')
        }).catch(() => {
            res.json({status: false})
        })
    } catch (error) {
        res.json({status: false})
    }
}




export const getDepartment = (req,res) => {
    try {
        getDepartmentService().then((data) => {
            res.render('departments.ejs', {data})
        }).catch(() => {
            res.json({status: false})
        })
    } catch (error) {
        res.json({status: false})
        console.log(error);
    }
}

export const addDepartment = (req,res) => {
    try {
        addDepartmentService(req.body.name).then(() => {
            res.redirect('/admin/departments')
        }).catch(() => {
            res.json({status: false})
        })
    } catch (error) {
        res.json({status: false})
        console.log(error);
    }
}

export const deleteDepartment = (req,res) => {
    try {
        deleteDepartmentService(req.query.id).then(() => {
            res.redirect('/admin/departments')
        }).catch(() => {
            res.json({status: false})
        })
    } catch (error) {
        res.json({status: false})
        console.log(error);
    }
}

export const deactivateDepartment = (req, res) => {
    try {
        deactivateDepartmentService(req.query.id).then(() => {
            res.redirect('/admin/departments')
        }).catch(() => {
            res.json({status: false})
        })
    } catch (error){
        res.json({status: false})
        console.log(error);
    }
}

export const activateDepartment = (req, res) => {
    try {
        activateDepartmentService(req.query.id).then(() => {
            res.redirect('/admin/departments')
        }).catch(() => {
            res.json({status: false})
        })
    } catch (error) {
        res.json({status: false})
    }
}

export const getDepartmentDetails = (req, res) => {
    try {
        getDepartmentDetailsService(req.query.id).then((response) => {
            res.render('departmentDetails.ejs', {data: response})
        }).catch(() => {
            res.json({status: false})
        })
    } catch (error) {
        res.json({status: false})
    }
}

export const addHint = (req, res) => {
    try {
        addHintService(req.query.id, req.body.hint).then(() => {
            res.redirect(`/admin/departmentDetails?id=${req.query.id}`)
        }).catch(() => {
            res.json({status: false})
        })
    } catch (error) {
        res.json({status: false})
    }
}

export const deleteHint = (req, res) => {
    try {
        deleteHintService(req,query.id, req,query.hint).then(() => {
            res.redirect(`/admin/departmentDetails?id=${req.query.id}`)
        }).catch(() => {
            res.json({status: false})
        })
    } catch (error) {
        res.json({status: false})
    }
}

export const departmentDropdownSelect = (req, res) => {
    try {
        getAuditService(req.query.id).then((response) => {
            res.render('home.ejs', response);
        }).catch((error) => {
            console.log(error);
        })
    } catch (error) {
        res.json({status: false});
    }
}