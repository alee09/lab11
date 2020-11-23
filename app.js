const contacts = [
    { name: "Picard", phone: "555-555-5555"},
    { name: "Crusher, B", phone: "555-555-5555"},
    { name: "La Forge", phone: "555-555-5555"}
]
function CrusherB(contacts){
    for(i = 0; i < contacts.length; i++){
        if(contacts[name] in contacts  == "Crusher, B"){
           var para = document.createElement("p");
           para.append(contacts[i]);
        }
        else{
            para.append("Contact not found")
        }
    }
}

function Worf(contacts){
    for(i = 0; i< contacts.length; i++){
        if(contacts[name] in contacts == "Worf"){
            var para = document.createElement("p");
            para.append("Worf");
        }else(
            contacts[i + 1] = "Worf"
        )
    }
}
CrusherB(contacts)