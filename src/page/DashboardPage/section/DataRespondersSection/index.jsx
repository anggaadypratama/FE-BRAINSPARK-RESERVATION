import React, {useState} from "react";
import {
	TablePagination,
	TableRow,
	IconButton,
	Paper,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
} from "@material-ui/core";

import GetAppIcon from "@material-ui/icons/GetApp";

import {useQuery} from "react-query";
import {getAllEventWithAuth} from "@services";
import moment from "moment";

import {nanoid} from "nanoid";
import xlsx from "json-as-xlsx";
import DataRespondersStyle from "./style";

const columns = [
	{
		id: "no",
		label: "No",
		minWidth: 0,
		align: "left",
	},
	{
		id: "name",
		label: "Name",
		minWidth: 200,
		align: "left",
	},
	{
		id: "date",
		label: "Date",
		minWidth: 100,
		align: "center",
	},
	{
		id: "status",
		label: "Status",
		minWidth: 50,
		align: "center",
		format: value => value.toLocaleString("en-US"),
	},
	{
		id: "register",
		label: "Total Register/Feedback",
		minWidth: 50,
		align: "center",
		format: value => value.toLocaleString("en-US"),
	},
	{
		id: "download",
		label: "Download",
		minWidth: 50,
		align: "center",
		format: value => value.toFixed(2),
	},
];

function createData(no, name, date, status, register, download) {
	return {
		no,
		name,
		date,
		status,
		register,
		download,
	};
}

const DataRespondersSection = () => {
	const classes = DataRespondersStyle();
	const [page, setPage] = useState(0);
	const [rowsPerPage, setRowsPerPage] = useState(10);

	const rows = [];

	const {data} = useQuery(["responders"], getAllEventWithAuth, {
		refetchOnWindowFocus: false,
	});

	data?.data
		?.sort((a, b) =>
			moment(b.date).format().localeCompare(moment(a.date).format())
		)
		?.forEach(
			(
				{themeName, date, isEventDone, participant, ticketLimit, isOnlyTelkom},
				i
			) => {
				const participantLength = participant.length;
				const separateTotalRegister = "/";
				const separateFileName = "_";
				const participantRegister =
					participantLength +
					separateTotalRegister +
					participant.filter(({isAbsen}) => isAbsen).length;

				const settings = {
					fileName: themeName + separateFileName + moment(date).format("L"),
					extraLength: 5,
					writeOptions: {},
				};
				const people = " people";
				const totalRegister = participant.length + people;
				const totalAttendance =
					participant.filter(({isAbsen}) => isAbsen).length + people;

				const xlsxData = [
					{
						sheet: "Initial Data",
						columns: [
							{label: "Theme Name", value: "name"}, // Top level data
							{label: "Date", value: row => row.date}, // Run functions
							{label: "Is Event Done", value: row => row.eventDone}, // Deep props
							{
								label: "Participant Category",
								value: row => row.isOnlyTelkom,
							}, // Deep props
							{label: "Ticket Limit", value: row => row.ticketLimit},
							{label: "Total Register", value: row => row.totalRegister},
							{label: "Total Attendance", value: row => row.totalAttendance},
						],
						content: [
							{
								name: themeName,
								date: moment(date).format("L"),
								eventDone: isEventDone ? "Done" : "Ongoing",
								isOnlyTelkom: isOnlyTelkom ? "Telkom University" : "Public",
								ticketLimit,
								totalRegister,
								totalAttendance,
							},
						],
					},
					participant.length > 0 && {
						sheet: "Participant Data",
						columns: [
							{label: "No", value: row => row.no},
							{label: "Name", value: row => row.name},
							{label: "Email", value: row => row.email},
							isOnlyTelkom && {label: "Nim", value: row => row.nim},
							!isOnlyTelkom && {label: "Status", value: row => row.Status},
							isOnlyTelkom && {label: "Fakultas", value: row => row.fakultas},
							{label: "Whatsapp", value: row => row.whatsapp},
							{label: "Line", value: row => row.line},
							{
								label: "Apakah hadir",
								value: row => (row.isAbsen ? "Ya" : "Tidak"),
							},
							{label: "Feedback", value: row => row.feedback},
						].filter(val => val),
						content: [
							...participant?.map(
								(
									{
										name,
										email,
										nim,
										Status,
										fakultas,
										whatsapp,
										line,
										isAbsen,
										feedback,
									},
									index
								) => ({
									no: index + 1,
									name,
									email,
									nim: nim > 0 && nim.length > 5 ? nim : "-",
									Status: Status?.length > 1 ? Status : "-",
									fakultas: fakultas?.length ? fakultas : "-",
									whatsapp: whatsapp?.length ? whatsapp : "-",
									line: line?.length ? line : "-",
									isAbsen,
									feedback: feedback?.length ? feedback : "-",
								})
							),
						],
					},
				].filter(xlsxFilter => xlsxFilter !== false);

				rows.push(
					createData(
						i + 1,
						themeName,
						moment(date).format("L"),
						isEventDone ? "Done" : "Ongoing",
						participantRegister,
						<IconButton onClick={() => xlsx(xlsxData, settings)}>
							<GetAppIcon />
						</IconButton>
					)
				);
			}
		);

	const handleChangePage = (event, newPage) => {
		setPage(newPage);
	};

	const handleChangeRowsPerPage = event => {
		setRowsPerPage(+event.target.value);
		setPage(0);
	};

	return (
		<Paper className={classes.root} elevation={0}>
			<TableContainer className={classes.container}>
				<Table stickyHeader aria-label="sticky table">
					<TableHead>
						<TableRow>
							{columns.map(column => (
								<TableCell
									classes={{head: classes.headTable, root: classes.table}}
									key={nanoid()}
									align={column.align}
									style={{minWidth: column.minWidth}}
								>
									{column.label}
								</TableCell>
							))}
						</TableRow>
					</TableHead>
					<TableBody>
						{rows
							.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
							.map(row => (
								<TableRow hover role="checkbox" tabIndex={-1} key={nanoid()}>
									{columns.map(column => {
										const value = row[column.id];
										return (
											<TableCell
												classes={{root: classes.table}}
												key={nanoid()}
												align={column.align}
											>
												{column.format && typeof value === "number"
													? column.format(value)
													: value}
											</TableCell>
										);
									})}
								</TableRow>
							))}
					</TableBody>
				</Table>
			</TableContainer>
			<div className={classes.pagination}>
				<TablePagination
					rowsPerPageOptions={[10, 25, 100]}
					component="div"
					count={rows.length}
					rowsPerPage={rowsPerPage}
					page={page}
					onPageChange={handleChangePage}
					onRowsPerPageChange={handleChangeRowsPerPage}
				/>
			</div>
		</Paper>
	);
};

export default DataRespondersSection;
