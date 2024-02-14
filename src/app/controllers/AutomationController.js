import automationService from '../services/automation.services';

class automationController {
    async automation(req, res) {
        try{

            const url = req.body.url;
            await automationService.printBrowser(url);
            
            res.status(200).json({
                status: true,
                message: "Deu tudo certo!"
            });
        }catch(error){
            res.status(500).json({
                status: false,
                message: "Ocorreu um erro no servidor"
            });
        }
    }
}

export default new automationController();