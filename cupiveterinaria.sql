-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 27-07-2023 a las 19:01:26
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `cupiveterinaria`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cita`
--

CREATE TABLE `cita` (
  `id` int(11) NOT NULL,
  `fecha` date NOT NULL,
  `hora` time NOT NULL,
  `tipo` varchar(127) NOT NULL,
  `doctor` varchar(255) NOT NULL,
  `motivo` varchar(255) NOT NULL,
  `idMascota` int(10) NOT NULL,
  `idCliente` int(10) NOT NULL,
  `sintomas` varchar(255) NOT NULL,
  `estado` varchar(15) NOT NULL DEFAULT 'asignada'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `cita`
--

INSERT INTO `cita` (`id`, `fecha`, `hora`, `tipo`, `doctor`, `motivo`, `idMascota`, `idCliente`, `sintomas`, `estado`) VALUES
(1, '2023-07-29', '15:15:00', 'Vacunación', 'Roxana Gaona', 'Seguimiento vacunas', 3, 1107975894, 'Ninguno', 'asignada'),
(2, '2023-07-29', '15:45:00', 'Baño', 'María Gaona', 'Aseo general mascota', 1, 1107975894, 'Ninguno', 'asignada');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cliente`
--

CREATE TABLE `cliente` (
  `cedula` int(10) NOT NULL,
  `nombreCompleto` varchar(255) NOT NULL,
  `direccion` varchar(255) NOT NULL,
  `correo` varchar(70) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `cliente`
--

INSERT INTO `cliente` (`cedula`, `nombreCompleto`, `direccion`, `correo`) VALUES
(1107854678, 'Andres Legro', 'Calle 10 # 25 - 43', 'aflegro@gmail.com'),
(1107975894, 'Juan David Mendez', 'Calle 156 # 21 sur 20', 'mendezmrf10@gmail.com');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `mascota`
--

CREATE TABLE `mascota` (
  `id` int(10) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `especie` varchar(30) NOT NULL,
  `raza` varchar(80) NOT NULL,
  `edad` int(10) NOT NULL,
  `genero` char(1) NOT NULL,
  `peso` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `mascota`
--

INSERT INTO `mascota` (`id`, `nombre`, `especie`, `raza`, `edad`, `genero`, `peso`) VALUES
(1, 'Coffee', 'Perro', 'Labrador', 10, 'H', 25),
(3, 'Quince', 'Perro', 'French Poodle', 3, 'M', 9);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `cita`
--
ALTER TABLE `cita`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_idMascota` (`idMascota`),
  ADD KEY `fk_idCLiente` (`idCliente`);

--
-- Indices de la tabla `cliente`
--
ALTER TABLE `cliente`
  ADD PRIMARY KEY (`cedula`);

--
-- Indices de la tabla `mascota`
--
ALTER TABLE `mascota`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `cita`
--
ALTER TABLE `cita`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `mascota`
--
ALTER TABLE `mascota`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `cita`
--
ALTER TABLE `cita`
  ADD CONSTRAINT `fk_idCLiente` FOREIGN KEY (`idCliente`) REFERENCES `cliente` (`cedula`),
  ADD CONSTRAINT `fk_idMascota` FOREIGN KEY (`idMascota`) REFERENCES `mascota` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
