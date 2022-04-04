const express = require('express');
const accountController = require('../controllers/accountController');

const router = express.Router();

router.get("/", accountController.account_index);
router.get("/:id", accountController.account_details);
router.put("/:id", accountController.account_client_update);
router.put("/statut/:id",accountController.account_status_update);
router.post("/", accountController.account_create_post);
// router.delete("/:id", accountController.account_delete);

module.exports = router;