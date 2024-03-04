-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 04/03/2024 às 19:02
-- Versão do servidor: 10.4.28-MariaDB
-- Versão do PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `musicas`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `musicas`
--

CREATE TABLE `musicas` (
  `id` int(11) NOT NULL,
  `nome` varchar(100) NOT NULL,
  `artista` varchar(100) NOT NULL,
  `img` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `musicas`
--

INSERT INTO `musicas` (`id`, `nome`, `artista`, `img`) VALUES
(1, 'Tomorrow', 'ALEXIS ASHLEY', 'ab67616d00001e02959fb4def3dbb0dbea656b18'),
(2, 'E.T. (Sped Up)', 'SPEDA,QUATTROTEQUE', 'ab67616d00001e02212a16c7bcf5e05689f6cada'),
(3, 'greedy', 'Ben Maxwell', 'ab67616d00001e02812c9ed9af7401be0b0e8df0'),
(4, 'Not Again', 'Gavin Degier', 'ab67616d00001e02e398c877806d65bb163e1b5b'),
(5, 'ANGEL', 'Toby Mai', 'ab67616d00001e0272fc1b898f9f08c477f6ea22'),
(6, 'True Love', 'Dri Kara', 'ab67616d00001e020be4e6c1847f9774998d959a'),
(7, 'what if it doesn\'t get better?', 'Mookigang, 静的 Static', 'ab67616d00001e029e7ee16a120a0926433cc326'),
(8, 'Crave', 'rhyal knight', 'ab67616d00001e028ebe7344fcd8b16cc86c5547'),
(9, 'DŽANUM', 'deprezz', 'ab67616d00001e028a9710475de2e42c3f51235f'),
(10, 'UNCOVER DRILL SPED UP', 'SPED UP DRILL GATES', 'ab67616d00001e029aebceb40b0c63c6fab836ed'),
(11, 'Kills Me Slowly', 'QUINTA', 'ab67616d00001e0251196721a9ba7e0664515c76'),
(12, 'NOWHERE', 'SNITCHXV', 'ab67616d00001e022c61680f5bc3e412e9ffc033'),
(13, 'Can We Kiss Forever? (Slowed & Reverbed)', 'herex', 'ab67616d00001e0206421df254d2978c5092ff72'),
(14, 'Mary On A Cross (Sped Up TikTok Version)', 'Divine Deluxe Hitz', 'ab67616d00001e022e941c7cbaebe65192058ab4'),
(15, 'You & Me', 'Giyumito', 'ab67616d00001e028606d553b2d4eebe11ebc9e4'),
(16, 'Ocean - Sped Up', 'OBLXKQ, eyfect', 'ab67616d00001e02a8e10cc709129d1dfc2490f1'),
(17, 'WE FOUND LOVE DRILL', 'DRILL GATES', 'ab67616d00001e026e2a7ba7b77d647d23cb066c');

-- --------------------------------------------------------

--
-- Estrutura para tabela `playlist`
--

CREATE TABLE `playlist` (
  `id` int(11) NOT NULL,
  `nome` varchar(100) NOT NULL,
  `altor` varchar(100) NOT NULL,
  `img` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `playlist`
--

INSERT INTO `playlist` (`id`, `nome`, `altor`, `img`) VALUES
(1, 'All Out 2020s', 'The biggest songs of the 2020s.', 'ab67706f00000002d771dc645afe9b87978b1d3e'),
(2, 'Ultimate Pop Gaming', 'Pop to fuel your gaming. Cover: Lady Gaga', 'ab67706f0000000272e7b251ac542256b3be927c'),
(3, 'Mega Hit Mix', 'A mega mix of 75 favorites from the last few years! ', 'ab67706f000000026125e14e8384f5312339e67e'),
(4, 'Pop Up', 'Super mega hits! Foto: Dua Lipa', 'ab67706f0000000252c3ffde9d7c932df582dba2'),
(5, 'Today’s Top Hits', 'Beyoncé is on top of the Hottest 50!', 'ab67706f000000024fea192e4badc04a095e1152'),
(6, 'Mix de NightcoreMuzzic', 'Nightcore High, fast demon e DRILL GATES', 'ab67706f000000026125e14e6456454e63b'),
(7, 'Mix anos 2000', 'Jason Mraz, Keane, Eminem e mais', 'ab67706f000000026125e14e234234234e654n'),
(8, 'Mix relax', 'Ty Brock, Savannah Sgro, Just Honest e mais', 'ab67706f000000026125e14e7435498986665e634g'),
(9, 'Daily Mix 3', 'Pistol, Axel Johansson, Mindme e mais', 'ab67706f000000026125e14e9035455e2r'),
(10, 'Descobertas da Semana', 'Sua mixtape semanal cheia de novas descobertas...', 'ab67706f000000026125e14e34534522445364e143q'),
(11, 'Mix pop', 'NOTD, Rosie Darling, Savannah Sgro e mais', 'ab67706f000000026125e14e4578768e34e'),
(12, 'Mix punk', 'jxdn, Against The Current, Bezo e mais', 'ab67706f000000026125e14e5453453453e63a');

-- --------------------------------------------------------

--
-- Estrutura para tabela `salvos`
--

CREATE TABLE `salvos` (
  `id` int(11) NOT NULL,
  `nome` varchar(100) NOT NULL,
  `artista` varchar(100) NOT NULL,
  `img` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `salvos`
--

INSERT INTO `salvos` (`id`, `nome`, `artista`, `img`) VALUES
(1, 'Gaming Playlist 2024 🎮 Melodic EDM 💫', 'Gaming Music ', 'ab67706c0000da84b0c1843e76c66ddb11e3aa08'),
(2, 'Músicas Curtidas', '340 músicas', 'ab67706f000000026125e14e657567567567567e674i'),
(3, 'Sad Covers', 'Spotify', 'ab67706f00000002122bc1391da8a7d5b2c2bc11'),
(4, 'Dance Music', 'Future House Cloud', 'ab67706c0000da849685ad5ebb429619a4e117d5'),
(5, 'Next Level', 'Spotify', 'ab67706f000000023d7c60e66f99667343c88adc'),
(6, 'Indie Caviar', 'Indie Space Records', 'ab67706c0000da84b4f3a5edb8f65f80e89f85ff'),
(7, 'Pop Hits 2024 ⚡️ Top 100 Trending & Clean Pop Music', 'Magic Records', 'ab67706c0000da8476d588a8f02418094ba24676'),
(8, 'Mix relax', 'Savannah Sgro', 'ab67706f000000026125e14e7435498986665e634g'),
(9, 'Mix pop', 'NOTD', 'ab67706f000000026125e14e4578768e34e'),
(10, 'VERÃO 2024', 'Spotify', 'ab67706f00000002ba238db0a369d130716352d6'),
(11, 'Bolha DEV', 'Alura', 'ab67656300005f1fe3c0298769e9c34d368e5408');

--
-- Índices para tabelas despejadas
--

--
-- Índices de tabela `musicas`
--
ALTER TABLE `musicas`
  ADD PRIMARY KEY (`id`);

--
-- Índices de tabela `playlist`
--
ALTER TABLE `playlist`
  ADD PRIMARY KEY (`id`);

--
-- Índices de tabela `salvos`
--
ALTER TABLE `salvos`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT para tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `musicas`
--
ALTER TABLE `musicas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT de tabela `playlist`
--
ALTER TABLE `playlist`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT de tabela `salvos`
--
ALTER TABLE `salvos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
