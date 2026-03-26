// Konfigurasi Token
Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJjODEzYjQ4ZS03YzQwLTQyNzctOGY4ZS0yYzU1NTczZmNlYjEiLCJpZCI6Mzg4MzI3LCJpYXQiOjE3NzE0MjQ5MTJ9.Uj0UH1snTb9-5xx_TzKqALua2vPm1SArrRqrrHiPmIo';

// Inisialisasi Viewer
const viewer = new Cesium.Viewer('cesiumContainer', {
    terrainProvider: Cesium.createWorldTerrain(),
    baseLayerPicker: true, // Bisa ganti satelit/peta jalan
    navigationHelpButton: false,
    homeButton: true
});

// Fungsi untuk memuat 3D Tiles Candi Tikus
async function setupCandiTikus() {
    try {
        const tileset = await Cesium.Cesium3DTileset.fromIonAssetId(4459330);
        viewer.scene.primitives.add(tileset);

        // Otomatis arahkan kamera ke model setelah dimuat
        viewer.zoomTo(tileset);

        console.log("Model Candi Tikus berhasil dimuat!");
    } catch (error) {
        console.error(`Error saat memuat tileset: ${error}`);
    }
}

setupCandiTikus();