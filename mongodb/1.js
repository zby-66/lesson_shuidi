db.orders.aggregate([{
    $match: {
        status: "completed",
        orderDate: {
            $gte: ISODate("2019-01-01"),
            $lt: ISODate("2019-04-01")
        }
    }
}, {
    $unwind: "$orderLines"
}, {
    $group: {
        _id: {
            sku: "$orderLines.sku"
        },
        count: {
            $sum: "$orderLines.qty"
        }
    }
}, {
    $sort: {
        "count": -1
    }
},
])