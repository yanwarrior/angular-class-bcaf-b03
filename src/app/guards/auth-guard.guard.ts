import { inject } from "@angular/core"
import { UserService } from "../services/user.service"
import { Router } from "@angular/router";

export const AuthGuard = () => {
  const userService = inject(UserService);
  const router = inject(Router);

  if (userService.isAuthenticated()) {
    return true;
  }

  router.navigate(['']);
  return false;
}

export const PreventGuard = (): boolean => {
  const userService = inject(UserService);
  const router = inject(Router);

  if (userService.isAuthenticated()) {
    router.navigate(['/barang']);
    return false;
  }

  return true;
}
