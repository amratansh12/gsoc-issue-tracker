"use server";

export default async function fetchOrgs() {
  try{
    const res = await fetch("https://api.gsocorganizations.dev/organizations.json")
    const data = await res.json();
    return data;
  } catch(error) {
    console.log(error);
  }
}