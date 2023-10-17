
function searchVideos() {
// Limpe os resultados da pesquisa anterior
document.getElementById('video-results').innerHTML = '';

// Obtenha o termo de pesquisa
const searchTerm = document.getElementById('search-input').value;

// Simule os resultados da pesquisa (você precisaria integrar uma API real aqui)
const searchResults = [
{ title: 'Vídeo 1', url: 'video1.mp4' },
{ title: 'Vídeo 2', url: 'video2.mp4' },
// Adicione mais vídeos conforme necessário
];

// Exiba os resultados da pesquisa
const videoResultsElement = document.getElementById('video-results');
searchResults.forEach(video => {
const videoElement = document.createElement('div');
videoElement.innerHTML = `
    <h2>${video.title}</h2>
    <video controls>
        <source src="${video.url}" type="video/mp4">
        Seu navegador não suporta vídeo HTML5.
    </video>
    <button onclick="downloadVideo('${video.url}', 'mp4')">Baixar MP4</button>
    <button onclick="downloadVideo('${video.url}', 'mp3')">Baixar MP3</button>
`;
videoResultsElement.appendChild(videoElement);
});
}

function downloadVideo(videoUrl, format) {
// Simule o download (você precisaria implementar a lógica real de download aqui)
alert(`Baixando ${format} de ${videoUrl}`);
}