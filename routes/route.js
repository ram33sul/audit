import express from 'express';
import { departmentDropdownSelect, getAdminHome, getAudit, postReport, printReport } from '../controllers/controller.js';

const router = express.Router();

router.get('/audit', getAudit);

router.get('/departmentDropDownSelect', departmentDropdownSelect);

router.post('/report', postReport);

router.get('/', (req,res) => {
    res.render('index.ejs')
})


export default router;