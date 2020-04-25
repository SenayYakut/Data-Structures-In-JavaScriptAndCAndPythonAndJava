/*
GoDaddy makes a lot of different top-level domains available to its customers. A top level domain is one that goes after the last dot(".")in the domain name, for example .com in the example.com
To help to users to choose from available domains, GoDaddy is introducung a new feature that shows the type of the chosen top-level domain. You have to implement this feature. To begin with, you want to write a function that labels the domains as "commercial","network","information","organization" for .com, .net, .info, .org respectively. For the given list of domains return the list of their labels.
Hints
split()
push()
*/

function domainType(domains){
    let domainTypes=[];
domains.forEach(domain=>{
        domain=domain.split(".");
        if(domain[domain.length-1]==="com"){
            domainTypes.push("commertial");
        }else if(domain[domain.length-1]==="net"){
            domainTypes.push("network");
        }else if(domain[domain.length-1]==="org"){
            domainTypes.push("organization");
        }else if(domain[domain.length-1]==="info"){
            domainTypes.push("information");
        }   
    });
    return domainTypes;
}

console.log(domainType(["en.wiki.org","codefights.com","happy.com","code.info"]));//[ 'organization', 'commertial', 'commertial', 'information' ] 
console.log(domainType(["senaykt.com","code.org","Harvard.org","Net.Io.net"]));//[ 'commertial', 'organization', 'organization', 'network' ] 

