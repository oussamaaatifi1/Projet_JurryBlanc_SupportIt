package coma;

import com.supportit.supportit.entity.Equipment;
import com.supportit.supportit.entity.enums.EquipmentStatut;
import com.supportit.supportit.repository.EquipementRepository;
import com.supportit.supportit.service.impl.EquipmentServiceImpl;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.mockito.Mockito.*;

public class EquipmentServiceImplTest {

	@Mock
	private EquipementRepository equipmentRepository;

	@InjectMocks
	private EquipmentServiceImpl equipmentService;

	@BeforeEach
	public void setUp() {
		MockitoAnnotations.openMocks(this);
	}

	@Test
	public void testAddEquipment() {
		Equipment equipment = new Equipment();
		equipment.setName("Laptop");
		equipment.setDescription("Dell XPS 13");
		equipment.setStatut(EquipmentStatut.ENCORE);

		when(equipmentRepository.save(equipment)).thenReturn(equipment);

		Equipment result = equipmentService.addEquipment(equipment);

		assertNotNull(result);
		assertEquals("Laptop", result.getName());
		assertEquals(EquipmentStatut.ENCORE, result.getStatut());
		verify(equipmentRepository, times(1)).save(equipment);
	}

	@Test
	public void testEditEquipment() {
		Long id = 1L;
		Equipment existingEquipment = new Equipment();
		existingEquipment.setEquipementId(id);
		existingEquipment.setName("Old Name");
		existingEquipment.setStatut(EquipmentStatut.AREPARE);

		Equipment newEquipment = new Equipment();
		newEquipment.setName("New Name");
		newEquipment.setDescription("New Description");
		newEquipment.setStatut(EquipmentStatut.REPARE);

		// Mock the repository methods
		when(equipmentRepository.findById(id)).thenReturn(Optional.of(existingEquipment));
		when(equipmentRepository.save(existingEquipment)).thenReturn(existingEquipment);

		// Call the method under test
		Equipment result = equipmentService.editEquipment(id, newEquipment);

		// Assert that the result is not null
		assertNotNull(result);
		// Assert that the result has the expected values
		assertEquals("New Name", result.getName());
		assertEquals(EquipmentStatut.REPARE, result.getStatut());
		// Verify that the repository methods were called
		verify(equipmentRepository, times(1)).findById(id);
		verify(equipmentRepository, times(1)).save(existingEquipment);
	}


	@Test
	public void testGetAllEquipements() {
		Equipment equipment1 = new Equipment();
		Equipment equipment2 = new Equipment();
		List<Equipment> equipments = Arrays.asList(equipment1, equipment2);

		when(equipmentRepository.findAll()).thenReturn(equipments);

		List<Equipment> result = equipmentService.getAllEquipements();

		assertEquals(2, result.size());
		verify(equipmentRepository, times(1)).findAll();
	}

	@Test
	public void testDeleteEquipment() {
		Long id = 1L;

		doNothing().when(equipmentRepository).deleteById(id);

		equipmentService.deleteEquipment(id);

		verify(equipmentRepository, times(1)).deleteById(id);
	}
}
