//@ $file=file_get_contents("post-01.txt");
var file=`Author: arkenidar
Place: arkenidar/post-001
Content:
Hello and welcome!
test: line 1
test: line 2
("Content" is a multi-line section)`

function split2(what, separator){
    var index=what.indexOf(separator)
    return [ what.substring(0, index) , what.substring(index+separator.length) ]
}

//@ list($preceding,$content)=explode("Content:\n",$file,2);
var [preceding,content]=split2(file,"Content:\n")
//@ echo $preceding;
console.log(preceding)

//@ $sections=[];
var sections={}

//@ $lines=explode("\n",$preceding);
var lines=preceding.split("\n")

/*
foreach($lines as $line){
    $exploded=explode(":", $line, 2);
    if(count($exploded)!=2) continue;
    list($before, $after) = $exploded;
    $sections[$before]=trim($after);
}
*/
for(var line of lines){
    var [before,after]=split2(line,":")
    if(before=="") continue
    sections[before]=after.trim()
}

console.log(sections)

console.log(content)
