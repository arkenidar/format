<?php
$file=file_get_contents("post-01.txt");
list($preceding,$content)=explode("Content:\n",$file,2);
echo $preceding;
$sections=[];
$lines=explode("\n",$preceding);
foreach($lines as $line){
    $exploded=explode(":", $line, 2);
    if(count($exploded)!=2) continue;
    list($before, $after) = $exploded;
    $sections[$before]=trim($after);
}
print_r($sections);
echo $content."\n";
