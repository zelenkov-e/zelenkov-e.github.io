import { DataUpdateNotifiler } from "./types";

const UrlMaxiss = `https://atp-inter-sprint-offers-preprod.s3.us-east-1.amazonaws.com/test/maxxis_stock.csv?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIQDAT7W3OLY5bNq55a8FjY48%2Bf0x69JoaHUIkEqUporzxwIgGevo%2FUU6LTbe2qrr7zaX4vPQ%2BzOLnQ9iMdn1XCFFL1kqiAMIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjM0MjM2NTIiDHY3QafWMCb2vl3AFyrcAqOwCwgDqg92Bdl%2F8Sy7dynlGKdqMRybouVtwEFuhvEZ5eBfaSvScaJ70h3xPWHUBt%2BubD%2BWoGK38LkIk86161skSdmiPxb41MRbNpvSlhU3BXkHSopsFnU3xu6A5CUJSfH10j5jUHx71yiALzDf%2BIwjYIXsnuBd0RabDI5fkerMvGAxe8LumU1RdTBaLncsXS3uTk4Dma8iUj07HxueeemQJHsPQ3Sll2%2BOcIbGjpwnb9m9mFwZxGu56psoH2w1IqRhnRgmGAeXErjTeg1ma4MMBnEYL9MUEcEXH85JzcEU9jKCWZhhR0wFpeh8MgA1puDQtzRZI2vxivXMs0jUaU7e8ADKGk1L%2Fo9pijnWk0S4sx8%2Be1ApXPg0uSbNqsmtjWTqC4UQkDrQEXZnYJhiPt55GW06wVnLVd7IhZ2t0cw%2B7x1E%2FkU%2FRK4CRUAS3%2FiWHweKgijewnunEZL6SjCnxKC2BjqzAlZSg5XEYYjvoSDE8aOStzLXp3Cw%2BvG02bATycN83mt8XACK39PGeN83F5PyWPmpzFI0A8oLTY10b1NXXHG18X%2FNy0Z8mSo1I3O%2FSjgxTTUYJk3OTrA0u30Od9SBu%2BqVKe2joImidvi1M%2Fd40ngOxkKJT5p%2FJRzH8pn9v4EkNwM5AwOrEbLdwsYCGaT5VfuubEIoEWSY4rY7CxR18vKFJ3Ug3kKzyHBC4I5iQ9Wg1NS5Wu6egBYEosMWAJ8l%2FtuXiT8FluPgnrXaOb5Vd4p19m5snv75vlNxqRdHevulD1vr5auDEdPEzgeVLI5%2FaDbA6hfdgdXLoJ8S0y1%2BLwJ%2FJgpt92Go%2BwD8%2Br%2Fy3UZB76eOp5MzGSsAStVL0JnPNdWulMoE0XbLzwS255N12L9Sis8%2FjyY%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240823T085113Z&X-Amz-SignedHeaders=host&X-Amz-Expires=43200&X-Amz-Credential=ASIAZI2LFSCSMDRCVN2J%2F20240823%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=2c02a535d6344d108b45832809af6115dd9b9cf40052b4b09b62cce74225f1aa`;
const UrlIS = `https://atp-inter-sprint-offers-preprod.s3.us-east-1.amazonaws.com/test/vrd-001-70124.csv?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIQDAT7W3OLY5bNq55a8FjY48%2Bf0x69JoaHUIkEqUporzxwIgGevo%2FUU6LTbe2qrr7zaX4vPQ%2BzOLnQ9iMdn1XCFFL1kqiAMIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjM0MjM2NTIiDHY3QafWMCb2vl3AFyrcAqOwCwgDqg92Bdl%2F8Sy7dynlGKdqMRybouVtwEFuhvEZ5eBfaSvScaJ70h3xPWHUBt%2BubD%2BWoGK38LkIk86161skSdmiPxb41MRbNpvSlhU3BXkHSopsFnU3xu6A5CUJSfH10j5jUHx71yiALzDf%2BIwjYIXsnuBd0RabDI5fkerMvGAxe8LumU1RdTBaLncsXS3uTk4Dma8iUj07HxueeemQJHsPQ3Sll2%2BOcIbGjpwnb9m9mFwZxGu56psoH2w1IqRhnRgmGAeXErjTeg1ma4MMBnEYL9MUEcEXH85JzcEU9jKCWZhhR0wFpeh8MgA1puDQtzRZI2vxivXMs0jUaU7e8ADKGk1L%2Fo9pijnWk0S4sx8%2Be1ApXPg0uSbNqsmtjWTqC4UQkDrQEXZnYJhiPt55GW06wVnLVd7IhZ2t0cw%2B7x1E%2FkU%2FRK4CRUAS3%2FiWHweKgijewnunEZL6SjCnxKC2BjqzAlZSg5XEYYjvoSDE8aOStzLXp3Cw%2BvG02bATycN83mt8XACK39PGeN83F5PyWPmpzFI0A8oLTY10b1NXXHG18X%2FNy0Z8mSo1I3O%2FSjgxTTUYJk3OTrA0u30Od9SBu%2BqVKe2joImidvi1M%2Fd40ngOxkKJT5p%2FJRzH8pn9v4EkNwM5AwOrEbLdwsYCGaT5VfuubEIoEWSY4rY7CxR18vKFJ3Ug3kKzyHBC4I5iQ9Wg1NS5Wu6egBYEosMWAJ8l%2FtuXiT8FluPgnrXaOb5Vd4p19m5snv75vlNxqRdHevulD1vr5auDEdPEzgeVLI5%2FaDbA6hfdgdXLoJ8S0y1%2BLwJ%2FJgpt92Go%2BwD8%2Br%2Fy3UZB76eOp5MzGSsAStVL0JnPNdWulMoE0XbLzwS255N12L9Sis8%2FjyY%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240823T092836Z&X-Amz-SignedHeaders=host&X-Amz-Expires=43199&X-Amz-Credential=ASIAZI2LFSCSMDRCVN2J%2F20240823%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=edcb339814ce41775c3bb8baab73ea0782754ca40cbacbe6263806ba709f7dfd`;
export const DefaultDataNotifier: DataUpdateNotifiler = {
  eventId: "99bf7db1-d03a-4584-8d7a-1dbf36d7768c",
  eventName: "TEST_SUPPLIER_AST",
  dataUrl: UrlIS,
  // dataUrl: UrlMaxiss,
  dataOtput: "./public/assets/IS_output.csv",
  // dataOtput: "./public/assets/maxxis_stock_output.csv",
  dataFileName: "maxxis_stock_output.csv",
  dataLength: 102234543,
  timestamp: "2024-03-25T17:57:14.161299800Z",
  attributes: {
    taskId: "112233",
    taskIds: "112233,223344",
  },
};
