import type { Request, Response, NextFunction } from "express";

export const validateNumericId = (
  req: Request<{ id: string }>,
  res: Response<{ success: boolean; message: string }>,
  next: NextFunction,
) => {
  const { id } = req.params;
  if (!/\d+$/.test(id)) {
    res
      .status(404)
      .json({ success: false, message: "Pet ID must be a number" });
  } else {
    next();
  }
};

export const pleaseAuth = (
  req: Request<{}, unknown, {}, { password?: string }>,
  res: Response<{ success: boolean; message: string }>,
  next: NextFunction,
) => {
  const { password } = req.query;
  if (password === "please") {
    next();
  } else {
    res
      .status(401)
      .json({ success: false, message: "Unauthorised. You must say 'please'" });
  }
};
