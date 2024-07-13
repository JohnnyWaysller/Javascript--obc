

function group(){
    console.log('Export nomeado não-inline (agrupado)')
}



function exportDefault(){
    console.log('Export default não-inline')
}

export {group} // export definido separado

export default exportDefault // export default passado separado