export default function paginate(items, pageNumber, pageSize) {
    let index = (pageNumber - 1) * pageSize;
    return items.slice(index, pageSize + index)
}