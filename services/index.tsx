import { gql, request } from "graphql-request"

const URL = "https://api-ap-south-1.hygraph.com/v2/clrs1c38w02zc01w1ntsdfd3z/master";

export const getCarsList = async () => {
    const query = gql`
    query CarLists {
        carLists {
            carAvg
            createdAt
            id
            name
            price
            publishedAt
            updatedAt
            seats
            carType
            image {
              url
            }
            carBrand
        }
      }
    `

    const result = await request(URL, query);
    // console.log(result);
    
    return result;
    // try {
    //     const result = await request("https://api-ap-south-1.hygraph.com/v2/clrs1c38w02zc01w1ntsdfd3z/master", query);
    //     return result;
    //   } catch (error) {
    //     console.error("Error fetching data:", error);
    //     throw error; 
    //   }
};

export const getStoreLocations = async () => {
    const query = gql `
    query storeLocation {
        storesLocations {
          address
        }
      }
    `

    const result = await request(URL, query);
    return result;
}



export const createBooking = async (formValue:any) => {
    const mutationQuery = gql `
    mutation MyMutation {
        createBooking(
          data: {
            contactNumber: "`+formValue.contactNumber+`", 
            dropOffDate: "`+formValue.dropOffDate+`",
            dropOffTime: "`+formValue.dropOffTime+`",
            pickUpDate: "`+formValue.pickUpDate+`", 
            pickUpTime: "`+formValue.pickUpTime+`", 
            userName: "`+formValue.userName+`", 
            carId: {connect: 
              {id: "`+formValue.carId+`"}}}
        ) {
            id
        }
      }
    `

    const result = await request(URL, mutationQuery);
    return result;
}