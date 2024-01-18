console.log("hello world");

async function fetchRandomPostcode() {
  try {
    const response = await fetch("/randomPostcode");

    if (!response.ok) {
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }

    const data = await response.json();

    document.getElementById("test1").innerHTML = data.result.postcode;

    const long = await data.result.longitude

    document.getElementById("test2").innerHTML = long

    console.log(data);
  } catch (error) {
    console.error("Error fetching random postcode:", error.message);
  }
}

fetchRandomPostcode();
