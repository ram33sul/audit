import express from 'express';
import { activateDepartment, activateTypeOfAudit, addDepartment, addHint, addTypeOfAudit, deactivateDepartment, deactivateTypeOfAudit, deleteDepartment, deleteHint, deleteTypeOfAudit, getAdminHome, getDepartment, getDepartmentDetails, gettypeOfAudits, postReport, printReport } from '../controllers/controller.js';

const router = express.Router();

router.get('/typeOfAudit', gettypeOfAudits);

router.post('/addTypeOfAudit', addTypeOfAudit);

router.get('/deactivateTypeOfAudit', deactivateTypeOfAudit);

router.get('/activateTypeOfAudit', activateTypeOfAudit);

router.get('/deleteTypeOfAudit', deleteTypeOfAudit);

router.get('/departments', getDepartment);

router.post('/addDepartment', addDepartment);

router.get('/deactivateDepartment', deactivateDepartment);

router.get('/activateDepartment', activateDepartment);

router.get('/deleteDepartment', deleteDepartment);

router.get('/departmentDetails', getDepartmentDetails);

router.post('/addHint', addHint);

router.get('/deleteHint', deleteHint);

router.get('/', getAdminHome);

export default router;