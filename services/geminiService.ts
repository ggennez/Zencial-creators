import { TikTokProfile } from "../types";

// --- CONFIGURAÇÃO DA API (TikTok Best Experience) ---
const RAPID_API_KEY = 'bed06ebf57msh0b0b0a39c832b95p118e69jsn63f4294f1086'; 
const RAPID_API_HOST = 'tiktok-best-experience.p.rapidapi.com';
const RAPID_API_URL = 'https://tiktok-best-experience.p.rapidapi.com/user/info';

export const analyzeTikTokProfile = async (username: string): Promise<TikTokProfile> => {
  const cleanUser = username.replace('@', '').trim();
  
  if (!RAPID_API_KEY) {
    throw new Error("API Key não configurada.");
  }

  try {
    console.log(`Buscando perfil: ${cleanUser} via ${RAPID_API_HOST}...`);
    
    const response = await fetch(`${RAPID_API_URL}?unique_id=${cleanUser}`, {
      method: 'GET',
      headers: {
        'x-rapidapi-key': RAPID_API_KEY,
        'x-rapidapi-host': RAPID_API_HOST
      }
    });

    if (!response.ok) {
      throw new Error(`Erro na API (${response.status}): Verifique a conexão.`);
    }

    const json = await response.json();
    console.log("Dados brutos da API:", json);

    // Validação baseada no snippet fornecido: json.data deve existir
    if (!json.data) {
      throw new Error("PROFILE_NOT_FOUND");
    }

    // Mapeamento dos campos conforme o retorno da 'tiktok-best-experience'
    const profile: TikTokProfile = {
      username: json.data.unique_id || cleanUser,
      displayName: json.data.nickname || cleanUser,
      followers: json.data.stats?.followerCount || 0,
      avatarUrl: json.data.avatar || `https://ui-avatars.com/api/?name=${cleanUser}&background=random`,
      bio: json.data.signature || 'Sem biografia disponível.'
    };

    return profile;

  } catch (error: any) {
    console.error("Falha no Scraper:", error);
    
    if (error.message === "PROFILE_NOT_FOUND" || error.message.includes("PROFILE_NOT_FOUND")) {
      throw new Error("PROFILE_NOT_FOUND");
    }
    
    throw error;
  }
};