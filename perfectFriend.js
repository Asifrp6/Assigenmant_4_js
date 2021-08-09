function perfectFriend (AllFriendsName){
    var Name='';

    // use for check input valid or not
    for(let n=0;n<AllFriendsName.length;n++){
    if(typeof AllFriendsName[n] != 'string'){
        return 'wrong input';
    }
    }
    // use for find 5 character name
    for(let i=0;i<AllFriendsName.length;i++)
        {
            if(AllFriendsName[i].length==5){
                Name=AllFriendsName[i];
                break;           
            }
        }
        if(Name.length==5)
        {
            return Name;
        }
        else 
        return 'Here is no name with 5 character';
}


const FriendsName= ['asif','0979879','alifs',];
var allname= perfectFriend(FriendsName);
console.log(allname);