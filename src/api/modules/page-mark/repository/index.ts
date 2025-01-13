import { injectable, inject } from "tsyringe";
import { IPageMarkRepository } from "../interfaces";

@injectable()
export default class PageMarkRepository implements IPageMarkRepository {}
