
const uri = 'http://localhost:5000/api/bookings/internal';

export const getBookingByReference = async (reference) => {
    return fetch(`${uri}/${reference}`)
        .then(response => response.json())
        .then(data => {return data})
}