

export function getIDFromSlug(slugPath){

    if (slugPath){
    let i = slugPath.indexOf("-");
    return slugPath.slice(0,i);
    }
    return 0;
}