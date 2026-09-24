function firstNonRepeatedChar(str) {
 // Write your code here
	let freq={};
    let count=0;
	for(let i=0;i<str.length;i++)
		{
			if(freq[str.charAt(i)]===undefined)
			{
				freq[str.charAt(i)]=1;
			}
			else
			{
				freq[str.charAt(i)]++;
			}
		}
	for(let i=0;i<str.length;i++) {
		if(freq[str.charAt(i)]==1)
		{
			console.log(str.charAt(i));
		}
		else
		{
			console.log("null");
		}
	}
	
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
