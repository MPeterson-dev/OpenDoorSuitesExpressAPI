import { Router } from "express";
import * as TenantsController from './tenants.controller';

const router = Router();
    
// Create Tenant
router.post('/tenants', TenantsController.createTenant);

// Read all Tenants
router.get('/tenants', TenantsController.readTenants);

// Update Tenant
router.put('/tenants', TenantsController.updateTenant);

// Delete Tenant by ID
router.delete('/tenants/:tenantId', TenantsController.deleteTenant);

// Get Tenants by Profession
router.get('/tenants/:profession', TenantsController.readTenantsByProfession);

// Get Tenants by Profession Search
router.get('/tenants/search/profession/:search', TenantsController.readTenantsByProfessionSearch);

// Get Tenants by Description Search
router.get('/tenants/search/description/:search', TenantsController.readTenantsByDescriptionSearch);

export default router;