DAY="00"
local file, err = io.open("../../inputs/" .. DAY .. "/a.txt", "r")

if not file then
  print("Error: Could not open the file. Reason: " .. (err or "unknown error"))
  return
end
local message = file:read("*all")
print(message)
