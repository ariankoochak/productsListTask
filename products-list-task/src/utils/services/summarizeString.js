export default function(str,len = 10){
    return `${str.substring(0,len-3).trim()}...`
}