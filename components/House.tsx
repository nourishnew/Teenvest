"use client";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { Mesh } from "three";

export default function House() {
	const { nodes, materials } = useGLTF("/stylized_christmas_house.glb");
	return (
		<group dispose={null} scale={[3, 3, 3]}>
			<group rotation={[-Math.PI / 2, 0, 0]}>
				<group rotation={[Math.PI / 2, 0, 0]}>
					<mesh
						castShadow
						receiveShadow
						geometry={(nodes.defaultMaterial as Mesh).geometry}
						material={materials.lambert9}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={(nodes.defaultMaterial_1 as Mesh).geometry}
						material={materials.lambert9}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={(nodes.defaultMaterial_1 as Mesh).geometry}
						material={materials.lambert10}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={(nodes.defaultMaterial_3 as Mesh).geometry}
						material={materials.lambert10}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={(nodes.defaultMaterial_4 as Mesh).geometry}
						material={materials.lambert10}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={(nodes.defaultMaterial_5 as Mesh).geometry}
						material={materials.lambert10}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={(nodes.defaultMaterial_6 as Mesh).geometry}
						material={materials.lambert10}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={(nodes.defaultMaterial_7 as Mesh).geometry}
						material={materials.lambert10}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={(nodes.defaultMaterial_8 as Mesh).geometry}
						material={materials.lambert10}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={(nodes.defaultMaterial_9 as Mesh).geometry}
						material={materials.lambert10}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={(nodes.defaultMaterial_10 as Mesh).geometry}
						material={materials.lambert10}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={(nodes.defaultMaterial_11 as Mesh).geometry}
						material={materials.lambert10}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={(nodes.defaultMaterial_12 as Mesh).geometry}
						material={materials.lambert10}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={(nodes.defaultMaterial_13 as Mesh).geometry}
						material={materials.lambert10}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={(nodes.defaultMaterial_14 as Mesh).geometry}
						material={materials.lambert10}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={(nodes.defaultMaterial_15 as Mesh).geometry}
						material={materials.lambert10}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={(nodes.defaultMaterial_16 as Mesh).geometry}
						material={materials.lambert10}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={(nodes.defaultMaterial_17 as Mesh).geometry}
						material={materials.lambert10}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={(nodes.defaultMaterial_18 as Mesh).geometry}
						material={materials.lambert10}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={(nodes.defaultMaterial_19 as Mesh).geometry}
						material={materials.lambert10}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={(nodes.defaultMaterial_20 as Mesh).geometry}
						material={materials.lambert10}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={(nodes.defaultMaterial_21 as Mesh).geometry}
						material={materials.lambert10}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={(nodes.defaultMaterial_22 as Mesh).geometry}
						material={materials.lambert10}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={(nodes.defaultMaterial_23 as Mesh).geometry}
						material={materials.lambert10}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={(nodes.defaultMaterial_24 as Mesh).geometry}
						material={materials.lambert10}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={(nodes.defaultMaterial_25 as Mesh).geometry}
						material={materials.lambert10}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={(nodes.defaultMaterial_26 as Mesh).geometry}
						material={materials.lambert10}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={(nodes.defaultMaterial_27 as Mesh).geometry}
						material={materials.lambert10}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={(nodes.defaultMaterial_28 as Mesh).geometry}
						material={materials.lambert10}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={(nodes.defaultMaterial_29 as Mesh).geometry}
						material={materials.lambert10}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={(nodes.defaultMaterial_30 as Mesh).geometry}
						material={materials.lambert10}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={(nodes.defaultMaterial_31 as Mesh).geometry}
						material={materials.lambert10}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={(nodes.defaultMaterial_32 as Mesh).geometry}
						material={materials.lambert10}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={(nodes.defaultMaterial_33 as Mesh).geometry}
						material={materials.lambert10}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={(nodes.defaultMaterial_34 as Mesh).geometry}
						material={materials.lambert10}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={(nodes.defaultMaterial_35 as Mesh).geometry}
						material={materials.lambert10}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={(nodes.defaultMaterial_36 as Mesh).geometry}
						material={materials.lambert10}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={(nodes.defaultMaterial_37 as Mesh).geometry}
						material={materials.lambert10}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={(nodes.defaultMaterial_38 as Mesh).geometry}
						material={materials.lambert10}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={(nodes.defaultMaterial_39 as Mesh).geometry}
						material={materials.lambert10}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={(nodes.defaultMaterial_40 as Mesh).geometry}
						material={materials.lambert10}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={(nodes.defaultMaterial_41 as Mesh).geometry}
						material={materials.lambert10}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={(nodes.defaultMaterial_42 as Mesh).geometry}
						material={materials.lambert10}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={(nodes.defaultMaterial_43 as Mesh).geometry}
						material={materials.lambert10}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={(nodes.defaultMaterial_44 as Mesh).geometry}
						material={materials.lambert10}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={(nodes.defaultMaterial_45 as Mesh).geometry}
						material={materials.lambert10}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={(nodes.defaultMaterial_46 as Mesh).geometry}
						material={materials.lambert10}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={(nodes.defaultMaterial_47 as Mesh).geometry}
						material={materials.lambert10}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={(nodes.defaultMaterial_48 as Mesh).geometry}
						material={materials.lambert10}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={(nodes.defaultMaterial_49 as Mesh).geometry}
						material={materials.lambert10}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={(nodes.defaultMaterial_50 as Mesh).geometry}
						material={materials.lambert10}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={(nodes.defaultMaterial_51 as Mesh).geometry}
						material={materials.lambert10}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={(nodes.defaultMaterial_52 as Mesh).geometry}
						material={materials.lambert10}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={(nodes.defaultMaterial_53 as Mesh).geometry}
						material={materials.lambert10}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={(nodes.defaultMaterial_54 as Mesh).geometry}
						material={materials.lambert10}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={(nodes.defaultMaterial_55 as Mesh).geometry}
						material={materials.lambert10}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={(nodes.defaultMaterial_56 as Mesh).geometry}
						material={materials.lambert10}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={(nodes.defaultMaterial_57 as Mesh).geometry}
						material={materials.lambert10}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={(nodes.defaultMaterial_58 as Mesh).geometry}
						material={materials.lambert10}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={(nodes.defaultMaterial_59 as Mesh).geometry}
						material={materials.lambert10}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={(nodes.defaultMaterial_60 as Mesh).geometry}
						material={materials.lambert10}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={(nodes.defaultMaterial_61 as Mesh).geometry}
						material={materials.lambert10}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={(nodes.defaultMaterial_62 as Mesh).geometry}
						material={materials.lambert10}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={(nodes.defaultMaterial_63 as Mesh).geometry}
						material={materials.lambert10}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={(nodes.defaultMaterial_64 as Mesh).geometry}
						material={materials.lambert10}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={(nodes.defaultMaterial_65 as Mesh).geometry}
						material={materials.lambert10}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={(nodes.defaultMaterial_66 as Mesh).geometry}
						material={materials.lambert10}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={(nodes.defaultMaterial_67 as Mesh).geometry}
						material={materials.lambert10}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={(nodes.defaultMaterial_68 as Mesh).geometry}
						material={materials.lambert10}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={(nodes.defaultMaterial_69 as Mesh).geometry}
						material={materials.lambert10}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={(nodes.defaultMaterial_70 as Mesh).geometry}
						material={materials.lambert10}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={(nodes.defaultMaterial_71 as Mesh).geometry}
						material={materials.lambert10}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={(nodes.defaultMaterial_72 as Mesh).geometry}
						material={materials.lambert10}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={(nodes.defaultMaterial_73 as Mesh).geometry}
						material={materials.lambert10}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={(nodes.defaultMaterial_74 as Mesh).geometry}
						material={materials.lambert10}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={(nodes.defaultMaterial_75 as Mesh).geometry}
						material={materials.lambert10}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={(nodes.defaultMaterial_76 as Mesh).geometry}
						material={materials.lambert10}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={(nodes.defaultMaterial_77 as Mesh).geometry}
						material={materials.lambert10}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={(nodes.defaultMaterial_78 as Mesh).geometry}
						material={materials.lambert10}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={(nodes.defaultMaterial_79 as Mesh).geometry}
						material={materials.lambert10}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={(nodes.defaultMaterial_80 as Mesh).geometry}
						material={materials.lambert10}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={(nodes.defaultMaterial_81 as Mesh).geometry}
						material={materials.lambert10}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={(nodes.defaultMaterial_82 as Mesh).geometry}
						material={materials.lambert10}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={(nodes.defaultMaterial_83 as Mesh).geometry}
						material={materials.lambert10}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={(nodes.defaultMaterial_84 as Mesh).geometry}
						material={materials.lambert10}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={(nodes.defaultMaterial_85 as Mesh).geometry}
						material={materials.lambert10}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={(nodes.defaultMaterial_86 as Mesh).geometry}
						material={materials.lambert10}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={(nodes.defaultMaterial_87 as Mesh).geometry}
						material={materials.lambert10}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={(nodes.defaultMaterial_88 as Mesh).geometry}
						material={materials.lambert10}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={(nodes.defaultMaterial_89 as Mesh).geometry}
						material={materials.lambert10}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={(nodes.defaultMaterial_90 as Mesh).geometry}
						material={materials.lambert10}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={(nodes.defaultMaterial_91 as Mesh).geometry}
						material={materials.lambert10}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={(nodes.defaultMaterial_92 as Mesh).geometry}
						material={materials.lambert10}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={(nodes.defaultMaterial_93 as Mesh).geometry}
						material={materials.lambert10}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={(nodes.defaultMaterial_94 as Mesh).geometry}
						material={materials.lambert10}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={(nodes.defaultMaterial_95 as Mesh).geometry}
						material={materials.lambert10}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={(nodes.defaultMaterial_96 as Mesh).geometry}
						material={materials.lambert10}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={(nodes.defaultMaterial_97 as Mesh).geometry}
						material={materials.lambert10}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={(nodes.defaultMaterial_98 as Mesh).geometry}
						material={materials.lambert10}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={(nodes.defaultMaterial_99 as Mesh).geometry}
						material={materials.lambert10}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={(nodes.defaultMaterial_100 as Mesh).geometry}
						material={materials.lambert10}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={(nodes.defaultMaterial_101 as Mesh).geometry}
						material={materials.lambert10}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={(nodes.defaultMaterial_102 as Mesh).geometry}
						material={materials.lambert10}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={(nodes.defaultMaterial_103 as Mesh).geometry}
						material={materials.lambert10}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={(nodes.defaultMaterial_104 as Mesh).geometry}
						material={materials.lambert10}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={(nodes.defaultMaterial_105 as Mesh).geometry}
						material={materials.lambert10}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={(nodes.defaultMaterial_106 as Mesh).geometry}
						material={materials.lambert10}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={(nodes.defaultMaterial_107 as Mesh).geometry}
						material={materials.lambert10}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={(nodes.defaultMaterial_108 as Mesh).geometry}
						material={materials.lambert10}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={(nodes.defaultMaterial_109 as Mesh).geometry}
						material={materials.lambert10}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={(nodes.defaultMaterial_110 as Mesh).geometry}
						material={materials.lambert10}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={(nodes.defaultMaterial_111 as Mesh).geometry}
						material={materials.lambert10}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={(nodes.defaultMaterial_112 as Mesh).geometry}
						material={materials.lambert10}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={(nodes.defaultMaterial_113 as Mesh).geometry}
						material={materials.lambert10}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={(nodes.defaultMaterial_114 as Mesh).geometry}
						material={materials.lambert10}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={(nodes.defaultMaterial_115 as Mesh).geometry}
						material={materials.lambert10}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={(nodes.defaultMaterial_116 as Mesh).geometry}
						material={materials.lambert10}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={(nodes.defaultMaterial_117 as Mesh).geometry}
						material={materials.lambert10}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={(nodes.defaultMaterial_118 as Mesh).geometry}
						material={materials.lambert10}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={(nodes.defaultMaterial_119 as Mesh).geometry}
						material={materials.lambert10}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={(nodes.defaultMaterial_120 as Mesh).geometry}
						material={materials.lambert10}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={(nodes.defaultMaterial_121 as Mesh).geometry}
						material={materials.lambert10}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={(nodes.defaultMaterial_122 as Mesh).geometry}
						material={materials.lambert10}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={(nodes.defaultMaterial_123 as Mesh).geometry}
						material={materials.lambert9}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={(nodes.defaultMaterial_124 as Mesh).geometry}
						material={materials.lambert9}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={(nodes.defaultMaterial_125 as Mesh).geometry}
						material={materials.lambert9}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={(nodes.defaultMaterial_126 as Mesh).geometry}
						material={materials.lambert9}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={(nodes.defaultMaterial_127 as Mesh).geometry}
						material={materials.lambert9}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={(nodes.defaultMaterial_128 as Mesh).geometry}
						material={materials.lambert9}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={(nodes.defaultMaterial_129 as Mesh).geometry}
						material={materials.lambert9}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={(nodes.defaultMaterial_130 as Mesh).geometry}
						material={materials.lambert9}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={(nodes.defaultMaterial_131 as Mesh).geometry}
						material={materials.lambert9}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={(nodes.defaultMaterial_132 as Mesh).geometry}
						material={materials.lambert9}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={(nodes.defaultMaterial_133 as Mesh).geometry}
						material={materials.lambert9}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={(nodes.defaultMaterial_134 as Mesh).geometry}
						material={materials.lambert9}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={(nodes.defaultMaterial_135 as Mesh).geometry}
						material={materials.lambert9}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={(nodes.defaultMaterial_136 as Mesh).geometry}
						material={materials.lambert9}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={(nodes.defaultMaterial_137 as Mesh).geometry}
						material={materials.lambert9}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={(nodes.defaultMaterial_138 as Mesh).geometry}
						material={materials.lambert5}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={(nodes.defaultMaterial_139 as Mesh).geometry}
						material={materials.lambert5}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={(nodes.defaultMaterial_140 as Mesh).geometry}
						material={materials.lambert5}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={(nodes.defaultMaterial_141 as Mesh).geometry}
						material={materials.lambert5}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={(nodes.defaultMaterial_142 as Mesh).geometry}
						material={materials.lambert5}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={(nodes.defaultMaterial_143 as Mesh).geometry}
						material={materials.lambert5}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={(nodes.defaultMaterial_144 as Mesh).geometry}
						material={materials.lambert5}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={(nodes.defaultMaterial_145 as Mesh).geometry}
						material={materials.lambert5}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={(nodes.defaultMaterial_146 as Mesh).geometry}
						material={materials.lambert5}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={(nodes.defaultMaterial_147 as Mesh).geometry}
						material={materials.lambert5}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={(nodes.defaultMaterial_148 as Mesh).geometry}
						material={materials.lambert5}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={(nodes.defaultMaterial_149 as Mesh).geometry}
						material={materials.lambert5}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={(nodes.defaultMaterial_150 as Mesh).geometry}
						material={materials.lambert5}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={(nodes.defaultMaterial_151 as Mesh).geometry}
						material={materials.lambert5}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={(nodes.defaultMaterial_152 as Mesh).geometry}
						material={materials.lambert4}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={(nodes.defaultMaterial_153 as Mesh).geometry}
						material={materials.lambert4}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={(nodes.defaultMaterial_154 as Mesh).geometry}
						material={materials.lambert4}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={(nodes.defaultMaterial_155 as Mesh).geometry}
						material={materials.lambert4}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={(nodes.defaultMaterial_156 as Mesh).geometry}
						material={materials.lambert4}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={(nodes.defaultMaterial_157 as Mesh).geometry}
						material={materials.lambert4}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={(nodes.defaultMaterial_158 as Mesh).geometry}
						material={materials.lambert4}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={(nodes.defaultMaterial_159 as Mesh).geometry}
						material={materials.lambert4}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={(nodes.defaultMaterial_160 as Mesh).geometry}
						material={materials.lambert4}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={(nodes.defaultMaterial_161 as Mesh).geometry}
						material={materials.lambert4}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={(nodes.defaultMaterial_162 as Mesh).geometry}
						material={materials.lambert4}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={(nodes.defaultMaterial_163 as Mesh).geometry}
						material={materials.lambert4}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={(nodes.defaultMaterial_164 as Mesh).geometry}
						material={materials.lambert4}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={(nodes.defaultMaterial_165 as Mesh).geometry}
						material={materials.lambert3}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={(nodes.defaultMaterial_166 as Mesh).geometry}
						material={materials.lambert3}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={(nodes.defaultMaterial_167 as Mesh).geometry}
						material={materials.lambert3}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={(nodes.defaultMaterial_168 as Mesh).geometry}
						material={materials.lambert3}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={(nodes.defaultMaterial_169 as Mesh).geometry}
						material={materials.lambert3}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={(nodes.defaultMaterial_170 as Mesh).geometry}
						material={materials.lambert3}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={(nodes.defaultMaterial_171 as Mesh).geometry}
						material={materials.lambert3}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={(nodes.defaultMaterial_172 as Mesh).geometry}
						material={materials.lambert3}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={(nodes.defaultMaterial_173 as Mesh).geometry}
						material={materials.lambert3}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={(nodes.defaultMaterial_174 as Mesh).geometry}
						material={materials.lambert3}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={(nodes.defaultMaterial_175 as Mesh).geometry}
						material={materials.lambert3}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={(nodes.defaultMaterial_176 as Mesh).geometry}
						material={materials.lambert3}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={(nodes.defaultMaterial_177 as Mesh).geometry}
						material={materials.lambert3}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={(nodes.defaultMaterial_178 as Mesh).geometry}
						material={materials.lambert3}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={(nodes.defaultMaterial_179 as Mesh).geometry}
						material={materials.lambert3}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={(nodes.defaultMaterial_180 as Mesh).geometry}
						material={materials.lambert3}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={(nodes.defaultMaterial_181 as Mesh).geometry}
						material={materials.lambert3}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={(nodes.defaultMaterial_182 as Mesh).geometry}
						material={materials.lambert3}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={(nodes.defaultMaterial_183 as Mesh).geometry}
						material={materials.lambert3}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={(nodes.defaultMaterial_184 as Mesh).geometry}
						material={materials.lambert10}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={(nodes.defaultMaterial_185 as Mesh).geometry}
						material={materials.lambert3}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={(nodes.defaultMaterial_186 as Mesh).geometry}
						material={materials.lambert3}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={(nodes.defaultMaterial_187 as Mesh).geometry}
						material={materials.lambert3}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={(nodes.defaultMaterial_188 as Mesh).geometry}
						material={materials.lambert3}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={(nodes.defaultMaterial_189 as Mesh).geometry}
						material={materials.lambert3}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={(nodes.defaultMaterial_190 as Mesh).geometry}
						material={materials.lambert3}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={(nodes.defaultMaterial_191 as Mesh).geometry}
						material={materials.lambert3}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={(nodes.defaultMaterial_192 as Mesh).geometry}
						material={materials.lambert3}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={(nodes.defaultMaterial_193 as Mesh).geometry}
						material={materials.lambert3}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={(nodes.defaultMaterial_194 as Mesh).geometry}
						material={materials.lambert3}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={(nodes.defaultMaterial_195 as Mesh).geometry}
						material={materials.lambert3}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={(nodes.defaultMaterial_196 as Mesh).geometry}
						material={materials.lambert3}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={(nodes.defaultMaterial_197 as Mesh).geometry}
						material={materials.lambert3}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={(nodes.defaultMaterial_198 as Mesh).geometry}
						material={materials.lambert3}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={(nodes.defaultMaterial_199 as Mesh).geometry}
						material={materials.lambert3}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={(nodes.defaultMaterial_200 as Mesh).geometry}
						material={materials.lambert3}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={(nodes.defaultMaterial_201 as Mesh).geometry}
						material={materials.lambert3}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={(nodes.defaultMaterial_202 as Mesh).geometry}
						material={materials.lambert3}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={(nodes.defaultMaterial_203 as Mesh).geometry}
						material={materials.lambert3}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={(nodes.defaultMaterial_204 as Mesh).geometry}
						material={materials.lambert3}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={(nodes.defaultMaterial_205 as Mesh).geometry}
						material={materials.lambert3}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={(nodes.defaultMaterial_206 as Mesh).geometry}
						material={materials.lambert3}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={(nodes.defaultMaterial_207 as Mesh).geometry}
						material={materials.lambert3}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={(nodes.defaultMaterial_208 as Mesh).geometry}
						material={materials.lambert3}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={(nodes.defaultMaterial_209 as Mesh).geometry}
						material={materials.lambert3}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={(nodes.defaultMaterial_210 as Mesh).geometry}
						material={materials.lambert3}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={(nodes.defaultMaterial_211 as Mesh).geometry}
						material={materials.lambert3}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={(nodes.defaultMaterial_212 as Mesh).geometry}
						material={materials.lambert3}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={(nodes.defaultMaterial_213 as Mesh).geometry}
						material={materials.lambert3}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={(nodes.defaultMaterial_214 as Mesh).geometry}
						material={materials.lambert3}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={(nodes.defaultMaterial_215 as Mesh).geometry}
						material={materials.lambert3}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={(nodes.defaultMaterial_216 as Mesh).geometry}
						material={materials.lambert3}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={(nodes.defaultMaterial_217 as Mesh).geometry}
						material={materials.lambert3}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={(nodes.defaultMaterial_218 as Mesh).geometry}
						material={materials.lambert3}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={(nodes.defaultMaterial_219 as Mesh).geometry}
						material={materials.lambert3}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={(nodes.defaultMaterial_220 as Mesh).geometry}
						material={materials.lambert3}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={(nodes.defaultMaterial_221 as Mesh).geometry}
						material={materials.lambert3}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={(nodes.defaultMaterial_222 as Mesh).geometry}
						material={materials.lambert3}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={(nodes.defaultMaterial_223 as Mesh).geometry}
						material={materials.lambert3}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={(nodes.defaultMaterial_224 as Mesh).geometry}
						material={materials.lambert3}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={(nodes.defaultMaterial_225 as Mesh).geometry}
						material={materials.lambert3}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={(nodes.defaultMaterial_226 as Mesh).geometry}
						material={materials.lambert3}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={(nodes.defaultMaterial_227 as Mesh).geometry}
						material={materials.lambert3}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={(nodes.defaultMaterial_228 as Mesh).geometry}
						material={materials.lambert3}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={(nodes.defaultMaterial_229 as Mesh).geometry}
						material={materials.lambert3}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={(nodes.defaultMaterial_230 as Mesh).geometry}
						material={materials.lambert3}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={(nodes.defaultMaterial_231 as Mesh).geometry}
						material={materials.lambert3}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={(nodes.defaultMaterial_232 as Mesh).geometry}
						material={materials.lambert3}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={(nodes.defaultMaterial_233 as Mesh).geometry}
						material={materials.lambert3}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={(nodes.defaultMaterial_234 as Mesh).geometry}
						material={materials.lambert3}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={(nodes.defaultMaterial_235 as Mesh).geometry}
						material={materials.lambert3}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={(nodes.defaultMaterial_236 as Mesh).geometry}
						material={materials.lambert3}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={(nodes.defaultMaterial_237 as Mesh).geometry}
						material={materials.lambert3}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={(nodes.defaultMaterial_238 as Mesh).geometry}
						material={materials.lambert3}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={(nodes.defaultMaterial_239 as Mesh).geometry}
						material={materials.lambert3}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={(nodes.defaultMaterial_240 as Mesh).geometry}
						material={materials.lambert3}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={(nodes.defaultMaterial_241 as Mesh).geometry}
						material={materials.lambert3}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={(nodes.defaultMaterial_242 as Mesh).geometry}
						material={materials.lambert3}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={(nodes.defaultMaterial_243 as Mesh).geometry}
						material={materials.lambert3}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={(nodes.defaultMaterial_244 as Mesh).geometry}
						material={materials.lambert3}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={(nodes.defaultMaterial_245 as Mesh).geometry}
						material={materials.lambert3}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={(nodes.defaultMaterial_246 as Mesh).geometry}
						material={materials.lambert3}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={(nodes.defaultMaterial_247 as Mesh).geometry}
						material={materials.lambert3}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={(nodes.defaultMaterial_248 as Mesh).geometry}
						material={materials.lambert3}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={(nodes.defaultMaterial_249 as Mesh).geometry}
						material={materials.lambert3}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={(nodes.defaultMaterial_250 as Mesh).geometry}
						material={materials.lambert3}
					/>
				</group>
			</group>
		</group>
	);
}

useGLTF.preload("/stylized_christmas_house.glb");
