import salesRepo from "./sales.repo";
import { ISales } from "./sales.types";
const create = (sales: ISales) => salesRepo.create(sales)
const getAll = () => salesRepo.getAll()
const getOne = (id: string) => salesRepo.getOne(id)
const filterData=(from : number , to: number )=>salesRepo.filterData(from, to);
export default {
    create,
    getAll,
    getOne,
    filterData

}