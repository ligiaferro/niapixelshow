import React, { useEffect } from "react";
import { Container, Typography, Button, Box } from "@mui/material";
import useOrder from "@/hooks/useOrder";
import { withProtectedRoute, OrderTable } from "@/components";
import { useRouter } from "next/router";

const AdminHome = () => {
  const router = useRouter();
  const { orders, getAllOrders, loading, error } = useOrder();

  useEffect(() => {
    getAllOrders();
  }, [getAllOrders]);

  const handleProduct = () => {
    router.push("/home/admin/products");
  };

  const handleCategory = () => {
    router.push("/home/admin/categories");
  };

  const handlePromotion = () => {
    router.push("/home/admin/promotions");
  };

  const handlePayment = () => {
    router.push("/home/admin/payment");
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "2rem",
      }}
    >
      <h1>ADMIN</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "2rem",
          alignItems: "center",
        }}
      >
        <Button
          onClick={handleProduct}
          style={{
            backgroundColor: "#FFFFFF",
            color: "#121212",
            fontWeight: 800,
          }}
          variant="contained"
        >
          Produtos
        </Button>
        <Button
          onClick={handleCategory}
          style={{
            backgroundColor: "#FFFFFF",
            color: "#121212",
            fontWeight: 800,
          }}
          variant="contained"
        >
          Categorias
        </Button>
        <Button
          onClick={handlePromotion}
          style={{
            backgroundColor: "#FFFFFF",
            color: "#121212",
            fontWeight: 800,
          }}
          variant="contained"
        >
          Promoções
        </Button>
        <Button
          onClick={handlePayment}
          style={{
            backgroundColor: "#FFFFFF",
            color: "#121212",
            fontWeight: 800,
          }}
          variant="contained"
        >
          Pagamento
        </Button>
      </div>
      <h1>HISTÓRICO DE PEDIDOS</h1>
      {loading ? (
        <Typography>Carregando...</Typography>
      ) : error ? (
        <Typography color="error">{error}</Typography>
      ) : (
        OrderTable(orders)
      )}
    </div>
  );
};

export default AdminHome;
