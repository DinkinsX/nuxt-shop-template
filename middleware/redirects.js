export default function ({ route, redirect }) {
    //редирект с нижнего слеша на тире
    if(route.fullPath.indexOf('_') != -1){
        redirect(301, route.fullPath.replace('_', '-'))
    }

    //статичные редиректы
    function handRedirect(oldPath, newPath) {
        if(route.fullPath == oldPath){
            redirect(301, newPath)
        }        
    }

    //handRedirect('/oldPath', '/newPath')
}