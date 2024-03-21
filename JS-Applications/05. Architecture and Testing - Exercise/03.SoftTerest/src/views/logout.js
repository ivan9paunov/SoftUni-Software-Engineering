import { userService } from '../service/userService.js';
import { userHelper } from '../utility/userHelper.js';

export function onLogout(ctx) {
    userService.logout();
    userHelper.clearUserData();
    ctx.updateNav();
    ctx.goTo('/');
}