// import { Head } from 'next/document';
// import router from 'next/router';
// import { format } from 'path';
// // import { Container } from 'postcss';
// import React, { Fragment } from 'react'
// import { AiFillCloseSquare } from 'react-icons/ai';
// import Container from '../UiElements/Container/Container';

// const InvoiceTable = () => {
//     return (
//         <>
//             <Head>
//                 <title>{TITLE} | INST.</title>
//                 <meta name="Description" content={SUB_TITLE} />
//             </Head>

//             <Container>
//                 <Block paddingTop={['0', '0', '0', '40px']}>
//                     <Grid gridColumns={12} gridGutters={0} gridMargins={0}>
//                         <Cell span={[12, 12, 3]}>
//                             <AppsMenu />
//                         </Cell>
//                         <Cell span={[12, 12, 9]}>
//                             {!loading ? (
//                                 <>
//                                     <Block
//                                         paddingTop={['10px', '15px', '30px', '0']}
//                                         overrides={{
//                                             Block: {
//                                                 style: {
//                                                     display: 'flex',
//                                                     alignItems: 'center',
//                                                     justifyContent: 'space-between',
//                                                     marginBottom: '40px',
//                                                 },
//                                             },
//                                         }}
//                                     >
//                                         <Block>
//                                             <Block
//                                                 as="h3"
//                                                 overrides={{
//                                                     Block: {
//                                                         style: ({ $theme }) => {
//                                                             return {
//                                                                 ...$theme.typography.font450,
//                                                                 color: $theme.colors.primaryA,
//                                                                 marginBottom: '10px',
//                                                             };
//                                                         },
//                                                     },
//                                                 }}
//                                             >
//                                                 {TITLE}
//                                             </Block>
//                                             <Block
//                                                 as="p"
//                                                 overrides={{
//                                                     Block: {
//                                                         style: ({ $theme }) => {
//                                                             return {
//                                                                 ...$theme.typography.font200,
//                                                                 color: $theme.colors.contentSecondary,
//                                                             };
//                                                         },
//                                                     },
//                                                 }}
//                                             >
//                                                 {SUB_TITLE}
//                                             </Block>
//                                         </Block>
//                                         <Block overrides={{ Block: { style: { flexShrink: 0 } } }}>
//                                             <Button
//                                                 onClick={() => router.push(`/apps/invoice/add`)}
//                                                 overrides={{
//                                                     BaseButton: {
//                                                         style: ({ $theme }) => {
//                                                             return {
//                                                                 ...$theme.typography.font250,
//                                                             };
//                                                         },
//                                                     },
//                                                 }}
//                                             >
//                                                 Add Invoice
//                                             </Button>
//                                         </Block>
//                                     </Block>

//                                     <Block
//                                         overrides={{
//                                             Block: {
//                                                 style: {
//                                                     minHeight: '150px',
//                                                 },
//                                             },
//                                         }}
//                                     >
//                                         <StyledTable $gridTemplateColumns="max-content max-content auto auto max-content max-content max-content">
//                                             <StyledTableHeadAlt>Number</StyledTableHeadAlt>
//                                             <StyledTableHeadAlt>Date</StyledTableHeadAlt>
//                                             <StyledTableHeadAlt>Bill From</StyledTableHeadAlt>
//                                             <StyledTableHeadAlt>Bill To</StyledTableHeadAlt>
//                                             <StyledTableHeadAlt>Total Cost</StyledTableHeadAlt>
//                                             <StyledTableHeadAlt>Status</StyledTableHeadAlt>
//                                             <StyledTableHeadAlt>Action</StyledTableHeadAlt>
//                                             {data?.invoices?.map((item: any, index: number) => {
//                                                 const striped = index % 2 === 0;
//                                                 const status =
//                                                     item?.status?.charAt(0).toUpperCase() +
//                                                     item?.status?.slice(1).toLowerCase();
//                                                 let tag;
//                                                 switch (item.status) {
//                                                     case 'SHIPPED':
//                                                         tag = (
//                                                             <Tag
//                                                                 kind="accent"
//                                                                 variant="solid"
//                                                                 closeable={false}
//                                                             >
//                                                                 {status}
//                                                             </Tag>
//                                                         );
//                                                         break;
//                                                     case 'PENDING':
//                                                         tag = (
//                                                             <Tag
//                                                                 kind="negative"
//                                                                 variant="solid"
//                                                                 closeable={false}
//                                                             >
//                                                                 {status}
//                                                             </Tag>
//                                                         );
//                                                         break;
//                                                     case 'DELIVERED':
//                                                         tag = (
//                                                             <Tag
//                                                                 kind="positive"
//                                                                 variant="solid"
//                                                                 closeable={false}
//                                                             >
//                                                                 {status}
//                                                             </Tag>
//                                                         );
//                                                         break;
//                                                 }
//                                                 return (
//                                                     <Fragment key={index}>
//                                                         <StyledBodyCell $striped={striped}>
//                                                             # {item.id}
//                                                         </StyledBodyCell>
//                                                         <StyledBodyCell $striped={striped}>
//                                                             {format(new Date(item.createdAt), 'yyyy-MM-dd')}
//                                                         </StyledBodyCell>
//                                                         <StyledBodyCell $striped={striped}>
//                                                             {item.vendor?.address}
//                                                         </StyledBodyCell>
//                                                         <StyledBodyCell $striped={striped}>
//                                                             {item.customer?.address}
//                                                         </StyledBodyCell>
//                                                         <StyledBodyCell $striped={striped}>
//                                                             $ {item.total}
//                                                         </StyledBodyCell>
//                                                         <StyledBodyCell $striped={striped}>
//                                                             {tag}
//                                                         </StyledBodyCell>
//                                                         <StyledBodyCell $striped={striped}>
//                                                             <IconButton
//                                                                 onClick={() =>
//                                                                     router.push(
//                                                                         '/apps/invoice/[id]',
//                                                                         `/apps/invoice/${item.id}`
//                                                                     )
//                                                                 }
//                                                             >
//                                                                 <IoIosEye />
//                                                             </IconButton>
//                                                             <IconButton
//                                                                 onClick={() => removeInvoice(item.id)}
//                                                             >
//                                                                 <AiFillCloseSquare />
//                                                             </IconButton>
//                                                         </StyledBodyCell>
//                                                     </Fragment>
//                                                 );
//                                             })}
//                                         </StyledTable>
//                                     </Block>
//                                 </>
//                             ) : (
//                                 <Loader />
//                             )}
//                         </Cell>
//                     </Grid>
//                 </Block>
//             </Container>
//         </>
//     )
// }

// export default InvoiceTable
