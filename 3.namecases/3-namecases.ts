let personName :string = "muhammad HAMZA";

console.log("lowercase:", personName.toLowerCase());

console.log("uppercase:", personName.toUpperCase());

console.log("titlecase:", personName.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1).
toLowerCase()).join(" "))