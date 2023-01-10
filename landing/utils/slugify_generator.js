import slugify from 'slugify';
export const product_link_generator = (name, id) => {
    let slugged = slugify(name, {
        lower: true,
        replacement: '-'
    });
    return `/products/${slugged}-p-` + id
};