// // With any

// // TypeScript trusts the developer completely.

// // So even unsafe code is allowed.

// // With unknown

// // TypeScript forces the developer to validate before usage.

// // So unsafe code is blocked at compile time.

// // Version 1 — any

// function logData(data: any) {

//     if (typeof data === "string") {
//         console.log(data.toUpperCase());
//     } else {
//         console.log(data + "Different datatype");
//     }
// }

// // This works safely because:

// //  YOU remembered to validate manually.

// // Important : But TypeScript did NOT force you to do it.

// // You could still accidentally write:

// function logData(data: any) {
//     console.log(data.toUpperCase());
// }

// // And TS allows it.

// // But with unknown
// function logData(data: unknown) {
//     console.log(data.toUpperCase());
// }

// // TypeScript immediately blocks it.

// // Compile error:

// // Object is of type 'unknown'

// // So with unknown:

// //  Validation is mandatory.

// // With any:

// //  Validation is optional.

// // any depends on developer discipline.

// // unknown enforces developer discipline.