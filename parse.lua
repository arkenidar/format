local lines=io.open("post-01.txt"):lines()

for line in lines do
  local separator=line:find(":")
  local before,after
  before=line:sub(1,separator-1)
  if before=="Content" then break end
  after=line:sub(separator+2,#line)
  print(before.." IS "..after)
end
print("-----------CONTENT-------")
for line in lines do
  print(line)
end
