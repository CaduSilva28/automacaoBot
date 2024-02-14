import express from 'express';
import AutomationController from '../app/controllers/AutomationController';

const routes = express.Router();

routes.post('/auto', AutomationController.automation);

export default routes;