import math
import os

def create_cylinder(radius_top, radius_bottom, height, segments=64, y_offset=0.0):
    vertices = []
    uvs = []
    normals = []
    faces = []

    half_h = height / 2.0
    
    # Side vertices & normals & UVs
    for i in range(segments + 1):
        angle = (2.0 * math.pi * i) / segments
        cos_a = math.cos(angle)
        sin_a = math.sin(angle)
        
        u = i / segments
        
        # Bottom vertex
        vertices.append((radius_bottom * cos_a, y_offset - half_h, radius_bottom * sin_a))
        uvs.append((u, 0.0))
        normals.append((cos_a, 0.0, sin_a))
        
        # Top vertex
        vertices.append((radius_top * cos_a, y_offset + half_h, radius_top * sin_a))
        uvs.append((u, 1.0))
        normals.append((cos_a, 0.0, sin_a))

    for i in range(segments):
        idx1 = i * 2 + 1
        idx2 = i * 2 + 2
        idx3 = (i + 1) * 2 + 1
        idx4 = (i + 1) * 2 + 2
        
        # Two triangles per segment
        faces.append([(idx1, idx1, idx1), (idx3, idx3, idx3), (idx2, idx2, idx2)])
        faces.append([(idx2, idx2, idx2), (idx3, idx3, idx3), (idx4, idx4, idx4)])

    return vertices, uvs, normals, faces

def write_obj_model(filepath):
    mtl_filename = os.path.basename(filepath).replace(".obj", ".mtl")
    
    lines = []
    lines.append(f"mtllib {mtl_filename}\n")
    
    v_offset = 1
    vt_offset = 1
    vn_offset = 1
    
    def add_mesh(name, mat_name, verts, uvs, normals, faces):
        nonlocal v_offset, vt_offset, vn_offset
        lines.append(f"g {name}\n")
        lines.append(f"usemtl {mat_name}\n")
        
        for v in verts:
            lines.append(f"v {v[0]:.6f} {v[1]:.6f} {v[2]:.6f}\n")
        for vt in uvs:
            lines.append(f"vt {vt[0]:.6f} {vt[1]:.6f}\n")
        for vn in normals:
            lines.append(f"vn {vn[0]:.6f} {vn[1]:.6f} {vn[2]:.6f}\n")
            
        for f in faces:
            f_str = " ".join([f"{idx[0] + v_offset - 1}/{idx[1] + vt_offset - 1}/{idx[2] + vn_offset - 1}" for idx in f])
            lines.append(f"f {f_str}\n")
            
        v_offset += len(verts)
        vt_offset += len(uvs)
        vn_offset += len(normals)

    # 1. Glass Body
    v, vt, vn, f = create_cylinder(1.0, 1.0, 2.4, segments=64, y_offset=0.0)
    add_mesh("GlassBody", "Glass_DarkGreen", v, vt, vn, f)
    
    # 2. Shoulder Taper
    v, vt, vn, f = create_cylinder(0.55, 1.0, 0.4, segments=64, y_offset=1.4)
    add_mesh("GlassShoulder", "Glass_DarkGreen", v, vt, vn, f)
    
    # 3. Glass Neck
    v, vt, vn, f = create_cylinder(0.55, 0.55, 0.3, segments=64, y_offset=1.75)
    add_mesh("GlassNeck", "Glass_DarkGreen", v, vt, vn, f)

    # 4. Label Wrap
    v, vt, vn, f = create_cylinder(1.01, 1.01, 1.8, segments=64, y_offset=-0.1)
    add_mesh("VialLabel", "Label_Retatrutide", v, vt, vn, f)

    # 5. Silver Aluminum Crimp Ring
    v, vt, vn, f = create_cylinder(0.62, 0.62, 0.35, segments=64, y_offset=1.85)
    add_mesh("SilverCrimpRing", "Metal_SilverCrimp", v, vt, vn, f)

    # 6. Green Top Flip Cap
    v, vt, vn, f = create_cylinder(0.66, 0.66, 0.2, segments=64, y_offset=2.1)
    add_mesh("GreenFlipCap", "Cap_DarkGreen", v, vt, vn, f)

    # 7. Powder Cake inside bottom
    v, vt, vn, f = create_cylinder(0.92, 0.92, 0.6, segments=64, y_offset=-0.8)
    add_mesh("LyophilizedPowder", "Powder_White", v, vt, vn, f)

    with open(filepath, "w") as f_out:
        f_out.writelines(lines)
    print(f"Exported OBJ 3D Model to {filepath}")

def write_mtl_file(filepath):
    content = """# Material Library for Retatrutide Peptide Vial 3D Asset

newmtl Glass_DarkGreen
Kd 0.05 0.25 0.18
Ks 0.9 0.9 0.9
Ns 120
d 0.85
illum 3

newmtl Label_Retatrutide
Kd 0.07 0.07 0.07
Ks 0.4 0.4 0.4
Ns 50
map_Kd label_retatrutide.png

newmtl Metal_SilverCrimp
Kd 0.75 0.78 0.80
Ks 0.95 0.95 0.95
Ns 180
illum 2

newmtl Cap_DarkGreen
Kd 0.06 0.32 0.20
Ks 0.6 0.6 0.6
Ns 80

newmtl Powder_White
Kd 0.92 0.93 0.94
Ks 0.1 0.1 0.1
Ns 10
"""
    with open(filepath, "w") as f_out:
        f_out.write(content)
    print(f"Exported MTL Material to {filepath}")

if __name__ == "__main__":
    out_obj = "public/models/retatrutide_vial.obj"
    out_mtl = "public/models/retatrutide_vial.mtl"
    write_obj_model(out_obj)
    write_mtl_file(out_mtl)
