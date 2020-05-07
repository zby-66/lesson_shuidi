db.orders.aggregate([
    {
        // 步骤1：匹配条件
        $match: {
            status: "completed",
            orderDate: {
                $gte: ISODate("2019-01-01"),
                $lt: ISODate("2019-04-01")
            }
        }
    }, {
        // 步骤2：按订单行展开
        $unwind: "$orderLines"
    }, {
        // 步骤3：按sku汇总
        $group: {
            _id: {
                state: "$state",
                sku: "$orderLines.sku"
            },
            count: {
                $sum: "$orderLines.qty"
            }
        }
    }, {
        // 步骤4：按州和销量排序
        $sort: {
            "_id.state": 1,
            "count": -1
        }
    }, {
        // 步骤4：取每个州top1
        $group: {
            _id: "$_id.state",
            sku: {
                $first: "$_id.sku"
            },
            count: {
                $first: "$count"
            }
        }
    }
])


db.orders.aggregate([
    {
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
