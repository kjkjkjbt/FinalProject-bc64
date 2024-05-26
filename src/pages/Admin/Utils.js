import { Tag } from "antd";

export const headerAdminColums = [
    {
        title: "id",
        dataIndex: "id",
        key: "id",
    },
    {
        title: "Name",
        dataIndex: "name",
        key: "name",
    },
    {
        title: "Email",
        dataIndex: "email",
        key: "email",
    },
    {
        title: "Birthday",
        dataIndex: "birthday",
        key: "birthday",
    },
    {
        title: "Loại Người Dùng",
        dataIndex: "loaiNguoiDung",
        key: "loaiNguoiDung",
        render: (_, record) => {
            if (record.role === "admin") {
                return <Tag color="red"> Admin </Tag>;
            } else {
                return <Tag color="orange">Guests </Tag>;
            }
        },
    },
    {
        title: "actions",
        dataIndex: "action",
        key: "action",
    },
];

export const headerAdminBookingColums = [
    {
        title: "id",
        dataIndex: "id",
        key: "id",
    },
    {
        title: "room id",
        dataIndex: "maPhong",
        key: "maPhong",
    },
    {
        title: "check-in date",
        dataIndex: "ngayDen",
        key: "ngayDen",
    },
    {
        title: "checkout date",
        dataIndex: "ngayDi",
        key: "ngayDi",
    },
    {
        title: "user id ",
        dataIndex: "maNguoiDung",
        key: "maNguoiDung",
    },
    {
        title: "Thao Tác",
        dataIndex: "action",
        key: "action",
    },
];

export const headerAdminRoomInfoColums = [
    {
        title: "id",
        dataIndex: "id",
        key: "id",
    },
    {
        title: "name",
        dataIndex: "tenPhong",
        key: "tenPhong",
    },
    {
        title: "bedroom",
        dataIndex: "phongNgu",
        key: "email",
    },
    {
        title: "Khách",
        dataIndex: "khach",
        key: "khach",
    },
    {
        title: "Hình Ảnh",
        dataIndex: "hinhAnh",
        key: "hinhAnh",
        render: (url) => {
            return <img width={100} src={url} alt="" />;
        },
    },
    {
        title: "actions",
        dataIndex: "action",
        key: "action",
    },
];

export const headerAdminLocationColums = [
    {
        title: "id",
        dataIndex: "id",
        key: "id",
    },
    {
        title: "locate ",
        dataIndex: "tenViTri",
        key: "tenViTri",
    },
    {
        title: "province",
        dataIndex: "tinhThanh",
        key: "tinhThanh",
    },
    {
        title: "country",
        dataIndex: "quocGia",
        key: "quocGia",
    },
    {
        title: "pictures",
        dataIndex: "hinhAnh",
        key: "hinhAnh",
        render: (url) => {
            return <img width={100} height={100} src={url} alt="" />;
        },
    },
    {
        title: "actions",
        dataIndex: "action",
        key: "action",
    },
];
