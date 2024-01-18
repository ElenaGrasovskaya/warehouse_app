import { TypedUseSelectorHook, useSelector } from "react-redux";
import { AppDispatch, RootSate } from "./store";
import { useDispatch } from "react-redux";

export const useAppSelector: TypedUseSelectorHook<RootSate> = useSelector;

export const useAppDispatch: () => AppDispatch = useDispatch;