const userData = [
    {
        "id": "123-s2-546",
        "name": "John Jacobs",
        "items": ["bucket", "bottle"],
        "address": "1st Cross, 9th Main, abc Apartment",
        "pincode": "5xx012"
    },
    {
        "id": "567-rt-945",
        "name": "David Mire",
        "items": ["Bedroom Set"],
        "address": "2nd Cross, BTI Apartment",
        "pincode": "4xx012"
    },
    {
        "id": "223-a1-234",
        "name": "Soloman Marshall",
        "items": ["bottle"],
        "address": "Riverbed Apartment",
        "pincode": "4xx032"
    },
    {
        "id": "121-s2-111",
        "name": "Ricky Beno",
        "items": ["Mobile Set"],
        "address": "Sunshine City",
        "pincode": "5xx072"
    },
    {
        "id": "b23-s2-321",
        "name": "Ross Wheeler",
        "items": ["Mobile"],
        "address": "1st Cross, 9th Main, abc Apartement",
        "pincode": "5xx012"
    },
    {
        "id": "113-n2-563",
        "name": "Ben Bish",
        "items": ["Kitchen Set", "Chair"],
        "address": "Sunshine City",
        "pincode": "5xx072"
    },
    {
        "id": "323-s2-112",
        "name": "John Michael",
        "items": ["Refrigerator"],
        "address": "1st Cross, 9th Main, abc Apartement",
        "pincode": "5xx012"
    },
    {
        "id": "abc-34-122",
        "name": "Jason Jordan",
        "items": ["Mobile"],
        "address": "Riverbed Apartment",
        "pincode": "4xx032"
    }
]

/**
 * Filters userlist based on searchKey
 * @param {string} searchKey 
 * @returns list of users with matching search key. All the fields of the user splitted using searchKey.
 *          it will help letter when we need to display data with highlighted searchKey. We can avoid 
 *          splitting one more time, hence improved performance.
 */
export const getFilterdUser = searchKey => {
    const pattern = new RegExp(`(${searchKey})`, 'gi');
    return userData
        .map(user => ({
            original: { ...user },
            id: user.id.split(pattern),
            name: user.name.split(pattern),
            inItems: user.items.findIndex(item => item.split(pattern).length > 1) !== -1,
            address: `${user.address} ${user.pincode}`.split(pattern)
        }))
        .filter(user => user.id.length > 1
            || user.name.length > 1
            || user.inItems
            || user.address.length > 1)
}