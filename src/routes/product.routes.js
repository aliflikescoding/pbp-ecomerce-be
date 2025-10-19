const express = require("express");
const router = express.Router();
const upload = require("../middleware/upload");
const {
  createProduct,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct,
  uploadProductImages,
  deleteProductImages, // ✅ Import the delete images function
  getAllProducts,
} = require("../controllers/product.controller");
const verifyAdmin = require("../middleware/verify.admin");

// CRUD Routes
router.post("/", verifyAdmin, upload.single("image"), createProduct);
router.get("/all", verifyAdmin, getAllProducts);
router.get("/", getProducts);
router.get("/:id", getProductById);
router.put("/:id", verifyAdmin, upload.single("image"), updateProduct);
router.delete("/:id", verifyAdmin, deleteProduct);

// Route to upload multiple images to a specific product
router.post(
  "/:id/images",
  verifyAdmin,
  upload.array("images", 10),
  uploadProductImages
);

// Route to delete all images from a specific product
router.delete("/:id/images", verifyAdmin, deleteProductImages);

module.exports = router;
